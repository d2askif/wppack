require('../css/style.css');
import Worker from './worker.worker.js';

let people = require('./people.js');
let $ = require('jquery');
let worker = new Worker();
worker.postMessage('ping');
worker.onmessage = (e) => console.log(e);
$.each(people, function (key, value) {
  $('body').append('<h1>' + value.name + '</h1>');
});

console.log(people[0].name);
