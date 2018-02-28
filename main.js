'use strict';

const {app, BrowserWindow, ipcMain, globalShortcut} = require('electron');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 368,
        frame: false,
        resizable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

});
