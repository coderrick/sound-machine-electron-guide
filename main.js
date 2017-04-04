/**
 * Entry point for Electron
 */
'use strict';

// var app = require('electron');
// var BrowserWindow = require('browser-window');
const electron = require('electron');
const path = require('path');


// Module to control application life.
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});