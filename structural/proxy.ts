interface IVisitor {
    say: (message: string) => void;
}

class Visitor implements IVisitor {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    say(message: string) {
        console.log(message);
    }
}

class LoggerProxy implements IVisitor {
    private visitor: Visitor;
    private log: string[] = [];

    constructor(visitor: Visitor) {
        this.visitor = visitor;
    }

    say(message: string) {
        this.log.push(`${this.visitor.name} said "${message}"`);
        this.visitor.say(message);
    }
}

// PROOF OF CONCEPT
const visitor = new LoggerProxy(new Visitor('Max'));
visitor.say('Hi!');
