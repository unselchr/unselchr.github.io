const spotifyController = require("./controllers/spotify");
const steamController = require("./controllers/steam");

module.exports = function (app){
    app.get("/steam", steamController.getOverview);
    app.get("/spotify", spotifyController.getOverview);
    app.get("/spotify/token",spotifyController.getToken);
};