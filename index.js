'use strict';

// Dependencies
const moment = require('moment');
const jsonfile = require('jsonfile');

// Generate the array with the dates
let dates = [];

for (let i = 0; i < 10; i++) {
    const date = moment()
    .add(i, 'd');
    dates.push({
        nombreFecha: `Fec${i + 1}`,
        fecha: new Date(date).toString(),
    });
}
// Put the dates in the response
const file = './data.json';
const response = {
    'codigo': '200',
    'data': dates,
};
const spaces = {
    spaces: 2,
};

// Write the JSON File
jsonfile.writeFile(file, response, spaces, function(err) {
    if (err) throw err;
});
