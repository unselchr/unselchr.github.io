const path = require("path");

module.exports = function(app){
    require("./api/routes.js")(app);
    app.get("/test",(req,res)=>res.send("test!"));

    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};