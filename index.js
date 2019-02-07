require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")));
}

require("./routes")(app);

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Server listening on ${port}`);//eslint-disable-line