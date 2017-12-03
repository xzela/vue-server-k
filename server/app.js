'use strict';

const config = require('./config');
const cors = require('cors');
const express = require('express');
const path = require('path');

const api = express();
const members = express();

members.engine('html', require('ejs').renderFile);
members.set('views', path.join(__dirname, config.client.path));
members.set('view engine', 'html');
members.use(express.static(path.join(__dirname, config.client.path)));

api.use(cors());
api.all('*', (req, res, next) => {
    console.log(req.method, req.url);
    return next();
});

members.all('*', (req, res, next) => {
    console.log(req.method, req.url);
    return next();
});

members.get('/', (req, res) => {
    return res.render('index');
});

api.get('/', (req, res) => {
    return res.json({message: 'api'})
});

api.get('/list', (req, res) => {
    let list = [ 'zero', 'one', 'two', 'three', 'four', 'five' ];
    return res.json(list);
});

members.listen(8080, () => {
    console.log('member port: 8080')
});

api.listen(8081, () => {
    console.log('api port: 8081');
});
