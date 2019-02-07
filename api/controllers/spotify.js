const fetch = require("node-fetch");


const spotifyAPIBaseUri = "https://api.spotify.com";
const spotifyAccountsBaseUri = "https://accounts.spotify.com";

const clientId = process.env["SPOTIFY_CLIENT_ID"];
const clientSecret = process.env["SPOTIFY_SECRET"];
const refreshToken = process.env["SPOTIFY_REFRESH_TOKEN"];
let accessToken = process.env["SPOTIFY_TOKEN"];

const refreshAccessToken = () => {
    return fetch(`${spotifyAccountsBaseUri}/api/token`, {
        method: "POST",
        body: `grant_type=refresh&refresh_token=${refreshToken}`,
        headers: {
            "Authorization": `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString("base64")}`
        }
    });
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
        getRecentlyPlayed()
            .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
            .then((recentlyPlayedResponseJSON) => {
                res.send(recentlyPlayedResponseJSON);
            })
            .catch(() => {
                refreshAccessToken()
                    .then((refreshResponse) => refreshResponse.json())
                    .then((refreshResponseJSON) => {
                        accessToken = refreshResponseJSON["access_token"];
                        getRecentlyPlayed()
                            .then((recentlyPlayedResponse) => recentlyPlayedResponse.json())
                            .then((recentlyPlayedResponseJSON) => {
                                res.send(recentlyPlayedResponseJSON);
                            })
                            .catch(() => {
                                res.status(500).send("Failed to get recently played tracks");
                            });
                    })
                    .catch(() => {
                        res.status(500).send("Failed to refresh Spotify token");
                    });
            });
    }
};