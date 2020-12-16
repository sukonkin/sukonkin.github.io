'use strict';

let hours = document.querySelector('.hours'),
	minutes = document.querySelector('.minutes'),
	seconds = document.querySelector('.seconds'),
	mseconds = document.querySelector('.mseconds');

let newHours = 0,
	newMinutes = 0,
	newSeconds = 0,
	newMseconds = 0;

const msecondsTimer = setInterval(startMsecond, 10);
	
function startMsecond() {
	if (newMseconds == 99) {
		newMseconds = 0;
		mseconds.innerHTML = newMseconds;
	} if (newMseconds < 9) {
		newMseconds++;
		mseconds.innerHTML = '0' + newMseconds;
	} else {
		newMseconds++;
		mseconds.innerHTML = newMseconds;
	}
}

const secondsTimer = setInterval(startSecond, 1000);
	
function startSecond() {
	if (newSeconds === 59) {
		newSeconds = 0;
		seconds.innerHTML = newSeconds;
	} if (newSeconds < 9) {
		newSeconds++;
		seconds.innerHTML = '0' + newSeconds;
	} else {
		newSeconds++;
		seconds.innerHTML = newSeconds;
	}
}

const minutesTimer = setInterval(startMinutes, 60000);
	
function startMinutes() {
	if (newMinutes == 59) {
		newMinutes = 0;
		minutes.innerHTML = newMinutes;
	} if (newMinutes < 9) {
		newMinutes++;
		minutes.innerHTML = '0' + newMinutes;
	} else {
		newMinutes++;
		minutes.innerHTML = newMinutes;
	}
}

const hoursTimer = setInterval(startHours, 36000000);
	
function startHours() {
	if (newHours == 23) {
		newHours = 0;
		hours.innerHTML = newHours;
	} if (newHours < 9) {
		newHours++;
		hours.innerHTML = '0' + newHours;
	} else {
		newHours++;
		hours.innerHTML = newHours;
	}
}








