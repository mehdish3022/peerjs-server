const { ExpressPeerServer } = require('peer');
const express = require('express');

const app = express();

const expressPort = 80;
const expressServer = app.listen(expressPort);
const peerServer = ExpressPeerServer(expressServer);

app.use('/', peerServer);