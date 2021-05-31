let current_date = new Date();
let end_date = new Date(1622505600*1000);
let totaltime = (end_date - current_date)/1000;
/*
days = totaltime/3600/24
hours (totaltime/3600) % 24
mins (totaltime/60) %60
seconds totaltime % 60
*/
console.log(current_date);

console.log(totaltime);

console.log(end_date);


let days = totaltime/3600/24;
let hours = (totaltime/3600) % 24;
let minutes = (totaltime/60) %60;
let seconds = totaltime % 60;

var result = document.getElementById("countdown")


let i =totaltime
setInterval(function(){
    i--
    console.log(Math.floor(days), 'days',Math.floor(hours), 'hours', Math.floor(minutes), 'minutes', Math.floor(seconds), 'seconds')
  
   result.innerHTML=`${Math.floor(days)} days, ${Math.floor(hours)} hours, ${Math.floor(minutes)} minutes, ${Math.floor(seconds)} seconds!`
    days = i/3600/24;
    hours = (i/3600) % 24;
    minutes = (i/60) %60;
    seconds = i % 60;
},1000)

