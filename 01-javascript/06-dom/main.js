'use strict';

var counter = 0;

var contentElement = document.querySelector('#content');
var buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function() {
    counter++;
    contentElement.innerHTML = '<b>' + counter + '</b>';
});
