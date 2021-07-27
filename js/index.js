//info
const buttonInfo = document.getElementById('button-info');
buttonInfo.addEventListener("click", closeInfo);

let closeInfoVar = true;

function closeInfo() {
    closeInfoVar = false;
    document.getElementById('info').style.display = "none";
}

//button-main
const buttonMain = document.getElementById('button-main');
buttonMain.addEventListener("click", openmain);
 function openmain(){
    closeTask();
    closeSetting();
    if (closeInfoVar === true){   
        closeInfo();
    }
 }

//interactivity tasks

const tasks = document.getElementById('button-tasks');
tasks.addEventListener("click", taskOC);

const backTask = document.getElementById('close-task');
backTask.addEventListener("click", closeTask);

let tasksValidation = true
function taskOC (){
    if (tasksValidation === true) {
        openTask();
        tasksValidation = false;
    } else {
        closeTask();
        tasksValidation = true;
    }
}

function openTask() {
    document.getElementById('main').style.display = "none";
    document.getElementById('main-task').style.display = "flex";
    if (closeInfoVar === true){   
        closeInfo();
    }
}
function closeTask() {
    document.getElementById('main').style.display = "flex";
    document.getElementById('main-task').style.display = "none";
    tasksValidation = true;
}

//interactivity setting

const setting = document.getElementById('button-setting');
setting.addEventListener("click", settingOC);

const closeSeting = document.getElementById('close-setting');
closeSeting.addEventListener("click", closeSetting);

let settingValidation = true

function settingOC (){
    if (settingValidation === true) {
        openSetting ();
        settingValidation = false;
    } else {
        closeSetting();
        settingValidation= true;
    }
}

function openSetting() {
    document.getElementById('main-setting').style.display = "block";
    if (closeInfoVar === true){   
        closeInfo();
    }
    
}

function closeSetting() {
    document.getElementById('main-setting').style.display = "none";
    msjError.innerText = '';
    errorClose();
    settingValidation= true;
}


// function disableScroll(){  
//     var x = window.scrollX;
//     var y = window.scrollY;
//     window.onscroll = function(){ window.scrollTo(x, y) };
// }
// disableScroll();