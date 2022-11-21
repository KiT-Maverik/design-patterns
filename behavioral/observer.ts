class Newspaper {
    private subscribers: Map<string, Person> = new Map;

    subscribe(sub: Person) {
        this.subscribers.set(sub.name, sub);
    }

    unsubscribe(sub: Person) {
        this.subscribers.delete(sub.name);
    }

    release() {
        this.subscribers.forEach(sub => sub.deliver());
    }
}

class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    deliver() {
        console.log(`${this.name} enjoying his newspaper.`);
    }

}

// PROOF OF CONCEPT
const publisher = new Newspaper();
const jack = new Person('Jack');
const marie = new Person('Marie');

publisher.subscribe(jack);
publisher.subscribe(marie);

publisher.release();

publisher.unsubscribe(marie);

publisher.release();
