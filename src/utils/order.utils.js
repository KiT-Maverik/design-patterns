import {DISABLED, STANDARD} from "../constants/reduction.constants.js";
import {calculateTax} from "./tax.utils.js";

function calculateSubtotal(prices, qty) {
    // TODO: handle non-equal list

    let subtotal = 0;

    for (let i = prices.length; i--; i) {
        subtotal += prices[i] * qty[i];
    }

    return parseFloat(subtotal.toFixed(2));
}

function getReductionScheme(scheme) {
    switch (scheme) {
        case "STANDARD" : return STANDARD;
        default: return DISABLED;
    }
}

function calculateDiscount(price, scheme) {
    const rate = scheme.reduce((acc, {discount, threshold}) => {
        if (price >= threshold && discount > acc) return discount;

        return acc
    }, 0);

    const amount = parseFloat((price / 100 * rate).toFixed(2));

    return {
        rate,
        amount,
    }
}

function calculateTotal({country, prices, quantities, reduction}) {
    const subtotal = calculateSubtotal(prices, quantities);
    const tax = calculateTax(subtotal, country);
    const discount = calculateDiscount(subtotal + tax, getReductionScheme(reduction));

    return {
        discount,
        subtotal,
        tax,
        total: parseFloat((subtotal + tax - discount.amount).toFixed(2)),
    };
}

export {calculateDiscount, calculateSubtotal, calculateTotal}

