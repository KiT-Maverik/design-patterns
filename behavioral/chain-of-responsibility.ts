class PaymentGateway {
    private name: string;
    private balance: number;
    private successor?: PaymentGateway;

    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }

    setSuccessor(successor: PaymentGateway) {
        this.successor = successor;
    }

    handlePayment(amount: number) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Successfully payed ${amount} with ${this.name}. Balance: ${this.balance}.`);
        } else if (this.successor) {
            console.log(`${this.name}: insufficient funds.`);
            this.successor.handlePayment(amount);
        } else {
            console.log(`${this.name}: insufficient funds.`);
            console.log('Payment failed: all wallets have insufficient funds.');
        }
    }
}

// PROOF OF CONCEPT
const payoneer = new PaymentGateway('Payoneer', 500);
const paypal = new PaymentGateway('Paypal', 1500);
const visa = new PaymentGateway('Visa', 2000);

payoneer.setSuccessor(paypal);
paypal.setSuccessor(visa);

payoneer.handlePayment(1800);
