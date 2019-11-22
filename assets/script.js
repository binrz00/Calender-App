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
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const inputEl = inputs[i].value;
        const prevData = localStorage.getItem("key" + i) || "[]";
        const data = JSON.parse(prevData);
        data.push(inputEl);
        localStorage.setItem("key" + i, JSON.stringify(data));
    })
}
setInterval(function () {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].innerText = "";
        inputs[i].innerText = JSON.parse(localStorage.getItem("key" + i) || "[]");
    }
}, 1000)
//input fields (need to change color)
const timeBlocks = document.querySelectorAll(".time-block-js");
timeBlocks.forEach(function (timeblock, index) {
    //if statements to change their class to match the time
    if (index +9 < JSON.parse(moment().format("H"))) {
        timeblock.classList.add("past");
    }
    if (index +9 == JSON.parse(moment().format("H"))) {

        timeblock.classList.add("present");
    }

    if (index +9 > JSON.parse(moment().format("H"))) {
        timeblock.classList.add("future");

    }
})
