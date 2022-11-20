class Memento {
    readonly state: string;

    constructor(state: string) {
        this.state = state;
    }
}

class Caretaker {
    private readonly history: Memento[] = [];

    save(state: string) {
        this.history.push(new Memento(state));
    }

    undo(): string | false {
        const data = this.history.pop();

        if (!data) return false;

        return data.state;
    }
}

class Originator {
    private data?: string;
    private history: Caretaker = new Caretaker();

    record(data: string) {
        this.history.save(this.data || '');
        this.data = data;
    }

    cancelRecord() {
        const data: false | string = this.history.undo();

        if (!data) console.log('Empty history. Undo disabled.');

        this.data = data as string;

        console.log(this.data);
    }
}

// PROOF OF CONCEPT
const originator = new Originator();
originator.record('one');
originator.record('two');
originator.record('three');

originator.cancelRecord();
originator.cancelRecord();
