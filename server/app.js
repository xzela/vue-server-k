'use strict';

const config = require('./config');
const express = require('express');
const path = require('path');

const api = express();
const members = express();

members.engine('html', require('ejs').renderFile);
members.set('views', path.join(__dirname, config.client.path));
members.set('view engine', 'html');
members.use(express.static(path.join(__dirname, config.client.path)));

members.get('/', (req, res) => {
    return res.render('index');
});

api.get('/', (req, res) => {
    return res.json({message: 'api'})
});

members.listen(8080, () => {
    console.log('member port: 8080')
});

api.listen(8081, () => {
    console.log('api port: 8081');
});
