type TContents = Array<Product | OrderComposite>;

abstract class Item {
    abstract getPrice(): number;
}

class Product extends Item {
    private readonly price: number;

    constructor(price: number) {
        super();
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

class OrderComposite extends Item {
    private readonly contents: TContents;

    constructor(contents: TContents) {
        super();
        this.contents = contents;
    }

    getPrice(): number {
        return this.contents.reduce((acc, item) => acc + item.getPrice(), 0);
    }
}
