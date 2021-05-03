console.log('Exercise car speed');

var distance = 420; //km

var hours = 2;
var minutes = 52;
var seconds = 48;

var time = (hours * 3600 + minutes * 60 + seconds) / 3600; //hours

console.log(time);

var velocity = distance / time;

console.log(velocity);

console.log(`The answer is ${velocity} km/h`);