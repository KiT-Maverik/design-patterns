import {TAX} from "../constants/tax.constants.js";

function applyTax(price, country) {
    // if wrong country
    return (price * (1 + TAX[country] / 100)).toFixed(2)
}
