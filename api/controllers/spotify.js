const fetch = require("node-fetch");
const axios = require("axios");
const querystring = require("querystring");

const spotifyAPIBaseUri = "https://api.spotify.com";
const spotifyAccountsBaseUri = "https://accounts.spotify.com";

const clientId = process.env["SPOTIFY_CLIENT_ID"];
const clientSecret = process.env["SPOTIFY_SECRET"];
const refreshToken = process.env["SPOTIFY_REFRESH_TOKEN"];
let accessToken = process.env["SPOTIFY_TOKEN"];

const refreshAccessToken = () => {
    // return fetch(`${spotifyAccountsBaseUri}/api/token`, {
    //     method: "POST",
    //     body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    //     headers: {
    //         "Authorization": `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString("base64")}`
    //     }
    // });
    let headers = {
        "Content-Type": "application/x-www-form-urlencoded;carset=utf-8",
        Authorization: `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString("base64")}`
    };
    let data = {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
    };
    return axios.post(spotifyAccountsBaseUri + "/api/token",querystring.stringify(data),{headers: headers});
};

const getRecentlyPlayed = () => {
    return fetch(`${spotifyAPIBaseUri}/v1/me/top/tracks`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
};


module.exports={
    getOverview: function (req, res) {
        refreshAccessToken()
            .then((refreshResponseJSON) => {
                accessToken = refreshResponseJSON["data"]["access_token"];
                getRecentlyPlayed()
                    .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
                    .then((recentlyPlayedResponseJSON) => {
                        let filteredResponse = [];
                        for(let track of recentlyPlayedResponseJSON.items){
                            filteredResponse.push({
                                name: track.name,
                                img: track.album.images[0].url,
                                artist: track.artists[0].name,
                            });
                        }
                        res.send(filteredResponse);
                    })
                    .catch(() => {
                        console.log(err)//eslint-disable-line
                        res.status(500).send("Failed to get recently played tracks");
                    });
            })
            .catch((err) => {
                console.log(err)//eslint-disable-line
                res.status(500).send("Failed to refresh Spotify token");
            });
    }
};