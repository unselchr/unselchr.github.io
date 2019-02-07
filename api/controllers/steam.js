const axios = require("axios");
module.exports={
    getOverview: function(req, res){
        axios.get("http://api.steampowered.com/IPlayerService/GetRecenlyPlayedGames/v0001/",{
            params:{
                key: process.env.STEAM_API_KEY,
                steamid: process.env.STEAM_USER_ID,
                format: "json",
            }
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