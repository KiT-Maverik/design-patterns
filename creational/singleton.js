class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') return Counter.instance;

        this.counter = 0;
        Counter.instance = this;
        return this;
    }

    incrementCounter() {
        this.counter++;
    }

    showCounter() {
        console.log(this.counter);
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter2.incrementCounter();
counter2.incrementCounter();
counter2.incrementCounter();

counter1.showCounter();
counter2.showCounter();

console.log(counter1 === counter2);
