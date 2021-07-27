
let button = document.getElementById('button');
button.addEventListener("click", ()=>{ if (closeInfoVar === false){ pomodoro()}});

let text = document.getElementById('text');

let message = {
    msj1: 'Focus on your task',
    msj2: 'Take a break',
    msj3: 'Take a long break',
    msj4: 'Pomodoro',
}

let instance = 0;
let cycle = 1;
let bloke = true;
let buttonClick = true;

function finish () {
    switch (true) {
        case instance < 6:
            switch (bloke){
                case true:
                    count_m = timers.pomodoro;
                    text.innerHTML= `${message.msj1}`;
                    cycle++;
                    instance++;
                    chanseButton()
                    break;
                case false:
                    count_m = timers.shortPause;
                    text.innerHTML= `${message.msj2}`;
                    instance++;
                    chanseButton()
                    break;
            }
            break;
        case instance == 6:
            count_m = timers.longPause;
            text.innerHTML= `${message.msj3}`;
            instance++;
            chanseButton()
            break;
        case instance == 7:
            count_m = timers.pomodoro;
            text.innerHTML= `${message.msj4}`;
            instance = 0;
            for (let i = 1; i < 5; i++ ) {
                document.getElementById("cycles-" + i).style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            }
            cycle = 1;
            chanseButton();
            break;
    }
}

function pomodoro () {
    tapRePlay = false;
    switch (true) {
        case instance < 7:
            switch (bloke) {
                case true:
                    if (count_m === timers.pomodoro && count_s == 0) {
                        chanseButton();
                        cyrcle();
                        text.innerHTML= `${message.msj1}`;
                        timer();
                    } else if (!(count_m == 0 && count_s == 0)){
                        if (buttonClick === true) {
                            reStartTime();
                            chanseButton();
                        } else {
                            stopTimer();
                            chanseButton();
                        }
                    }
                    break;
                case false:
                    if (count_m === timers.shortPause && count_s == 0) {
                        chanseButton();
                        cyrcle();
                        timer();
                    } else if (!(count_m == 0 && count_s == 0)){
                        if (buttonClick === true) {
                            reStartTime();
                            chanseButton();
                        } else {
                            stopTimer();
                            chanseButton();
                        }
                    }
                    break;
            }
            break;
        case instance == 7:
            if (count_m === timers.longPause && count_s == 0) {
                chanseButton();
                timer();
            } else if (!(count_m == 0 && count_s == 0)){
                if (buttonClick === true) {
                    reStartTime();
                    chanseButton();
                } else {
                    stopTimer();
                    chanseButton();
                }
            }
            break
    }
}

// countdown.innerHTML = `0${count_m}:<sup class="second">0${count_s}</sup>`;


function chanseButton () {

    if (buttonClick === true) {
        button.value = "Pause";
        document.getElementById('button-reload').style.display = "block";
        buttonClick = false;
    } else {
        button.value = "Start";
        document.getElementById('button-reload').style.display = "none";
        buttonClick = true;
    }
}

function cyrcle() {
    document.getElementById("cycles-" + cycle).style.backgroundColor = "rgba(255, 255, 255, 1)"
}
