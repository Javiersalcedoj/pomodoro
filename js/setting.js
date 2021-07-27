
let settingButton =  document.getElementById('time');
settingButton.addEventListener('click', applySetting);

let pom = document.getElementById('pomodoro');
let sBreak = document.getElementById('s-break');
let lBreak = document.getElementById('l-break');

let msjError = document.getElementById('msjError');

function applySetting () {
    t1 = Number(pom.value);
    t2 = Number(sBreak.value);
    t3 = Number(lBreak.value);

    if (t1 > 0 && t2 > 0 && t3 > 0){
        if ( (Number.isInteger(t1) && Number.isInteger(t2) && Number.isInteger(t3)) == true){
            timers.pomodoro = t1;
            timers.shortPause = t2;
            timers.longPause = t3;
            msjError.innerText = 'Changes were applied';
            msjError.style.color = "green";
            count_s = 00;
            closeWithError = false;
            if (instance < 7 ){
                switch (bloke){
                    case true:
                        count_m = timers.pomodoro;
                        if (firtTimer == true) {
                            stopTimer();
                        }
                        tapRePlayFuntion();
                        break;
                    case false:
                        count_m = timers.shortPause;
                        stopTimer();
                        tapRePlayFuntion();
                        break;
                }
            } else {
                count_m = timers.longPause;
                stopTimer();
                tapRePlayFuntion();
            }
            setTimeout(()=>{
                closeSetting();
            }, 500)
            print();
        } else{
            closeWithError = true;
            msjError.innerText = '* Please enter a whole number';
            msjError.style.color = "red";
        }
    }  else {
        closeWithError = true;
        msjError.innerText = '* Please enter a number greater than 0';
        msjError.style.color = "red";
    };
};

let closeWithError;
function errorClose (){
    if (closeWithError == true) {
        pom.value = timers.pomodoro;
        sBreak.value = timers.shortPause;
        lBreak.value = timers.longPause;
    }
}
function tapRePlayFuntion(){
    switch (true){ 
        case firtTimer === false:
            break;
        case tapRePlay === false:
            if (!buttonClick === true){
                chanseButton();
            }
            break;
    }
}
