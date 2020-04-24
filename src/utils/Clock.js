export default class Clock {
    constructor(date, delay, addTime, func) {
        this.startDate = date;
        this.now = new Date(date);
        this.delay = delay;
        this.addTime = addTime;
        this.func = func;
        this.running = false;
    }

    run() {
        this.running = true;
        this.runtime();
    }

    runtime() {
        if (!this.running)
            return;

        setTimeout(() => {
            this.runtime();
        }, this.delay);

        try {
            this.func(this.now);
        } catch (err) {
            console.error(err);
            this.stop();
        }
        this.now.setTime(this.now.getTime() + this.addTime);
    }

    stop() {
        this.running = false;
    }
}