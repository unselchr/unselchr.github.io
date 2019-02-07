const axios = require("axios");
module.exports={
    getToken: function(req, res){
        axios.get("https://accoutns.spotify.com/authorize",{
            params:{
                client_id: process.env.SPOTIFY_CLIENT_ID,
                response_type: "code",
                redirect_uri: "http://chrisunsell.com/",
                scope: "user-top-read",
            }
                .then((response)=>{
                    console.log(response)//eslint-disable-line
                    res.send(response);
                })
                .catch((err)=>{
                    console.log(err)//eslint-disable-line
                    res.send(err);
                })
        });
    },
    getOverview: function(req, res){
        axios.get("https://api.spotify.com/v1/me",{

        })
            .then((response)=>{
                res.json(response);
            })
            .catch((err)=>{
                console.log(err)//eslint-disable-line
                res.send(err);
            });
    }
};