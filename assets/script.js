let display = moment().format("dddd, MMMM Do YYYY");

//display the current day
const displayDay = document.getElementById("currentDay");
displayDay.innerHTML = display;
//grab all the elements for future changes
const container = document.getElementById("container");
const buttons = document.querySelectorAll(".saveBtn");
//these are the user inputs for the event
const inputs = document.querySelectorAll("textarea")
//buttons have to save input in local storage
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
    const inputEl = inputs[i].value;
    const prevData = localStorage.getItem("key"+i) || "[]";
    const data = JSON.parse(prevData);
    data.push(inputEl);
    localStorage.setItem("key"+i, JSON.stringify(data));
    })
}

//input fields (need to change color)
const timeBlocks = document.querySelectorAll(".description");
timeBlocks.forEach(function (item, index) {
    //this will set their value to the time in 24 hour format
    item.setAttribute("value", index += 9)
    //if statements to change their class to match the time
    if (index < JSON.parse(moment().format("H"))) {
        item.classList.add("past");
    }
    if (index == JSON.parse(moment().format("H"))) {

        item.classList.add("present");
    }

    if (index > JSON.parse(moment().format("H"))) {
        item.classList.add("future");
    
    }
})
