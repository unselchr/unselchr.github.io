const axios = require("axios");
module.exports={
    getOverview: function(req, res){
        axios.get("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/",{
            params:{
                key: process.env.STEAM_API_KEY,
                steamid: process.env.STEAM_USER_ID,
            }
        })
            .then((response)=>{
                res.send(response.data);
            })
            .catch((err)=>{
                console.log(err)//eslint-disable-line
                res.send(err);
            });
    }
};