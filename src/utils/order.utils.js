import {DISABLED, STANDARD} from "../constants/reduction.constants.js";

export function calculateSubtotal(price, qty) {
    // non equal lists
    let subtotal = 0;

    for (let i = price.length; i--; i) {
        subtotal += price[i] * qty[i];
    }

    return subtotal;
}

export function getReductionScheme(scheme) {
    switch (scheme) {
        case "STANDARD" : return STANDARD;
        default: return DISABLED;
    }
}

export function calculateReduction(price, scheme) {
    return scheme.reduce((acc, {discount, threshold}) => {
        if (price >= threshold && discount > acc) return discount;

        return acc
    }, 0)
}

