let timers = {
    pomodoro: 25, 
    shortPause: 5,
    longPause: 15,
}

let count_m = timers.pomodoro;
let count_s = 00;

let m = document.getElementById('minute');
let s = document.getElementById('second');

let countdown = document.getElementById('minute');
let firtTimer = false;

function timer () {
    firtTimer = true;
    clock = setInterval(function(){
        if (count_s === 0) {
            if (count_m === 0) {
                count_s++;
                if (bloke === true) {
                    bloke = false
                } else {
                    bloke = true;
                }
                stopTimer();
                alarm()
                finish();
            } else {
                count_m --;
                count_s += 60;
                print ();
            }
        }
        count_s--;
        print();
    }, 1000)    
};
function stopTimer () {
    clearInterval(clock);
};
function reStartTime () {
    timer ();
};

let tapRePlay = false;

function rePlay () {
    tapRePlay = true;
    switch (true){
        case (instance < 7 && bloke == true):
            stopTimer();
            count_m = timers.pomodoro;
            count_s = 0;
            print();
            chanseButton();
            break;
        case (instance < 7 && bloke == false):
            stopTimer();
            count_m = timers.shortPause;
            count_s = 0;
            print();
            chanseButton();
            break;
        case instance == 7:
            stopTimer();
            count_m = timers.longPause;
            count_s = 0;
            print();
            chanseButton();
            break;

    }
}

function print (){
    switch (true){
        case count_m < 10:
            switch (true){
                case count_s < 10:
                    countdown.innerHTML = `0${count_m}:<sup class="second">0${count_s}</sup>`;
                break;
                case count_s >= 10:
                    countdown.innerHTML = `0${count_m}:<sup class="second">${count_s}</sup>`;
                    break;
            }
            break;
        case count_m >= 10:
            switch (true){
                case count_s < 10:
                    countdown.innerHTML = `${count_m}:<sup class="second">0${count_s}</sup>`;
                break;
                case count_s >= 10:
                    countdown.innerHTML = `${count_m}:<sup class="second">${count_s}</sup>`;
                    break;
            }
        break;
    }
};

function alarm(){
    let sound =  document.getElementById('sound');
    sound.play();
}




