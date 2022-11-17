interface IIterator<T> {
    getCurrent: () => T;
    isFinished: () => boolean;
}

class BasicIterator implements IIterator<string> {
    private readonly collection;
    private index: number;

    constructor(collection: string[]) {
        this.collection = collection;
        this.index = 0;
    }

    getCurrent() {
        const current = this.collection[this.index];
        this.index++;

        return current;
    }

    isFinished() {
        return !!this.collection[this.index];
    }
}

class ReversedIterator implements IIterator<string> {
    private readonly collection;
    private index: number;

    constructor(collection: string[]) {
        this.collection = collection;
        this.index = collection.length - 1;
    }

    getCurrent() {
        const current = this.collection[this.index];
        this.index--;

        return current;
    }

    isFinished() {
        return !!this.collection[this.index];
    }
}
