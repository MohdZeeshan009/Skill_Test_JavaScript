
// Modularizing the js code by using IIFE

const stopWatch = (() => {
    document.addEventListener('click', btnClic);
    const inputBox = document.querySelector('#input-box');

    let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    let int = null;

    // Start function to start timer
    function startTimer() {

        console.log('Start timer call');

        if (int != null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
        inputBox.innerHTML = int;
    }

    // Stop function to stop timer

    function stopTimer() {
        console.log('Stop timer called');
        clearInterval(int);
    }

    // Reset function to reset the timer

    function resetTimer() {
        clearInterval(int);
        [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
        inputBox.innerHTML = `00 : 00 : 00 `;
    }

    // Display click funtion to handle click by user

    function btnClic(e) {

        if (e.target.id === 'start') {
            startTimer();
        }
        else if (e.target.id === 'stop') {
            stopTimer();
        }
        else if (e.target.id === 'reset') {
            resetTimer();
        }
    }

    // Timer function to handle to timer 

    function displayTimer() {
        miliseconds += 10;
        if (miliseconds >= 1000) {
            miliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

        inputBox.innerHTML = `${h} : ${m} : ${s}`;

    }
})();

