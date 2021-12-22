const express = require('express');
const helmet = require('helmet');
//const compress = require('compression');
const app = express();
const glob = require('glob');
const path = require('path');
const cors = require('cors');

const defaultRoutes = require('../routers/default-route');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


function initGlobRouter(){
    const getGlobbedpaths = globPattern => glob.sync(globPattern);
    const serverRoutes = getGlobbedpaths('routers/*-route.js');
    serverRoutes.forEach(tempPath => {
        const route = require(path.resolve(tempPath));
        if(tempPath != '/routes/default.js') 
            app.use(route);
    });
    app.use(defaultRoutes);
}

initGlobRouter();

module.exports = app;