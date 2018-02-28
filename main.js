'use strict';

const {app, BrowserWindow} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 368
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

});
