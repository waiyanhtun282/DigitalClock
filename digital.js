//digital Clock
const box = document.querySelector('.box');
 
const days =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const months =[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function run(){

let date = new Date();

//hours,minutes,seconds
let hh =date.getHours();
let mm =date.getMinutes();
let ss =date.getSeconds();
//years,months,days,
let wee =date.getDate();
let mon=date.getMonth();
let yy=date.getFullYear();
let dd=date.getDay();


const Mn=(hh < 12) ?" AM" : " PM";
if(hh> 12) hh-=12;
if(mm< 10) mm+="0" + mm;
if(ss < 10) ss+="0" + ss;

let fullYear =`<span> ${days[dd]} /${months[mon]} /${wee} /${yy}  </span>`;

box.innerHTML =`${hh} : ${mm} : ${ss}  ${Mn} <br> ${fullYear}`;
}

setInterval(run, 1000);