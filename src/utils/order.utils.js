export function calculateSubtotal(price, qty) {
    // non equal lists
    let subtotal = 0;

    for (let i = price.length; i--; i) {
        subtotal += price[i] * qty[i];
    }

    return subtotal;
}
