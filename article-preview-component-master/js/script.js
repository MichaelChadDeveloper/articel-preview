'use strict';

var buttonClick = document.querySelector('.share-button');
	
buttonClick.onclick = function() {

	var shareOptions = document.querySelector('.share-options');

	shareOptions.style.visibility = 'visible';
}