const express = require('express');
const { PORT } = require("./config/serverConfig");

const app = express();

const setupAndStartServer = async() => {
    const app = express();

    app.listen(PORT, ()=>{
        console.log(`Server starting at ${PORT}`);
    });
}

setupAndStartServer();