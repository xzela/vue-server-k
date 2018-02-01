'use strict';

const config = require('./config');
const cors = require('cors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const api = express();
const members = express();

let people = [
    { id: 0, name: 'Jimmy' },
    { id: 1, name: 'Jonny' },
    { id: 2, name: 'Jerry' },
    { id: 3, name: 'Jerrion' },
    { id: 4, name: 'Jeffery' },
    { id: 5, name: 'Jake' }
];

members.engine('html', require('ejs').renderFile);
members.set('views', path.join(__dirname, config.client.path));
members.set('view engine', 'html');
members.use(express.static(path.join(__dirname, config.client.path)));

api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
// load up the CORS settings
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

api.get('/people', (req, res) => {
    return res.json(people);
});

api.get('/people/:id', (req, res) => {
    let person = people.find(p => {
        if (p.id === Number(req.params.id)) {
            return p;
        }
    });
    return res.json(person);
});

api.post('/people', (req, res) => {
    let id = people.length;
    let obj = {
        id,
        name: req.body.name
    };
    people.push(obj);
    return res.json(people);
});

members.listen(8080, () => {
    console.log('member port: 8080')
});

api.listen(8081, () => {
    console.log('api port: 8081');
});
