import Clock from './utils/Clock';
import RandomSeed from './utils/RandomSeed';

const randomSeed = new RandomSeed(1);

const startDate = new Date();
startDate.setHours(0, 0, 0, 0);

const clockDate = document.getElementById("clock-date");
const clockTime = document.getElementById("clock-time");

const clock = new Clock(
    startDate,
    1000 / 24, // 1s run 24 times
    1800000, // 1 times run 0.5 hour
    (now) => {
        let hour = now.getHours();
        if (hour === 0) {
            let month = (now.getMonth() + 1 + '').padStart(2, '0');
            let date = (now.getDate() + '').padStart(2, '0');
            clockDate.innerHTML = `${now.getFullYear()}-${month}-${date}`;
        }
        clockTime.innerHTML = (hour + '').padStart(2, '0') + ':00';


        console.log(randomSeed.random());
    }
);



container.addEventListener("click", (e) => {
    console.log("x: " + e.clientX + ", y: " + e.clientY);
});

// run/stop
const buttonRun = document.getElementById("btn-run");
const buttonStop = document.getElementById("btn-stop");

function toggleRun() {
    let on, off;
    if (clock.running) {
        clock.stop();
        off = buttonStop, on = buttonRun;
    } else {
        clock.run();
        off = buttonRun, on = buttonStop;
    }
    off.style.display = 'none';
    on.style.display = '';
}

buttonRun.onclick = e => {
    toggleRun();
};

buttonStop.onclick = e => {
    toggleRun();
};

document.body.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
        toggleRun();
    }
});
toggleRun();