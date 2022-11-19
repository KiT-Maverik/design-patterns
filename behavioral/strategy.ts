type TTier = 'Silver' | 'Gold' | 'Platinum';

interface IDiscountStrategy {
    getDiscount: () => number;
}

class SilverDiscount implements IDiscountStrategy {
    private discount = 10;

    getDiscount() {
        return this.discount;
    }
}

class DiscountFactory {
    static produce(tier: TTier) {
        switch (tier) {
            default: return new SilverDiscount();
        }
    }
}

class Client {
    private tier: TTier;
    private discount: IDiscountStrategy;

    constructor(tier: TTier) {
        this.tier = tier;
        this.discount = DiscountFactory.produce(tier);
    }

    checkout(amount: number) {
        const discount = this.discount.getDiscount();
        const total = amount - amount / 100 * discount;

        console.log(`Your tier is ${this.tier}. Order amount ${amount}. Dicount ${discount}%. Total: ${total}`);
    }
}

new Client('Silver')
    .checkout(1000);
