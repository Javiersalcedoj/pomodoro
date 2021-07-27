let input = document.getElementById('input');
let add = document.getElementById('add');
add.addEventListener('click', addTask);

let task = document.getElementById('task-padre');

function addTask() {
    if (!(input.value === "")){
        task.insertAdjacentHTML('beforeend', `<div class="task-hijos" id="${countID}">
        <img src="./imgs/clear.svg" alt="clear"  onclick="deleteTask(${countID})">
        <p class="name-task">${input.value}</p>
        <p class="date-task">${hour} - ${day} ${month}</p>
        </div>`)

        input.value= "";
        countID++;
    }
}
//delete
let countID = 1;

function deleteTask (numID) {
    document.getElementById(numID).style.display = "none";
}

//date
let date = new Date();
let hour = hourFormt (date.getHours());
let day = date.getDate();
let month = monthLyric(date.getMonth());

function hourFormt (h){
    if (h>12) {
        return `${h-12} PM`;
    } else {
        return `${h} AM`;
    }
}

function monthLyric(m) {
    switch (true) {
        case m == 0:
            return "January"
            break;
        case m == 1:
            return "February"
            break;
        case m == 2:
             return "March"
            break;
        case m == 3:
            return "April"
            break;
        case m == 4:
            return "May"
            break;
        case m == 5:
             return "June"
            break;
        case m == 6:
            return "July"
            break;
        case m == 7:
            return "August"
            break;
        case m == 8:
             return "September"
            break;
        case m == 9:
            return "October"
            break;
        case m == 10:
            return "November"
            break;
        case m == 11:
             return "December"
            break;
    }
} 
