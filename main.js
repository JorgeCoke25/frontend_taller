const fetch = require('node-fetch');

const url = 'https://api.boostr.cl/vehicle/CPRL32.json';
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));