let display = moment().format("dddd, MMMM Do YYYY");
let now = moment();
/*how you set dates:
let currentYear = moment().set('year', 2019);
let currentMonth = moment().set('month', 11);  
let currentDate = moment().set('date', 20);
let currentHour = moment().set('hour', 20);
let currentMinute = moment().set('minute', 20);*/
//display the current day
const displayDay = document.getElementById("currentDay");
displayDay.innerHTML = display;
//grab all the elements for future changes
const container = document.getElementById("container");
const buttons = document.querySelectorAll(".saveBtn");
//these are the user inputs for the event
const inputEls = document.querySelectorAll("textarea")
//buttons have to save input in local storage
buttons.forEach(function(button){
button.addEventListener("click",function(){
    localStorage.setItem("event","date of the event");
})
})


//input fields (need to change color)
const timeBlocks = document.querySelectorAll(".timeBlock-js");
timeBlocks.forEach(function(item,index){
//this will set their value to the time in 24 hour format
item.setAttribute("value",index+=9)
//if statements to change their class to match the time
item.classList.add("future");



})
