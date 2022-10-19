import {TAX} from "../constants/tax.constants.js";

function calculateTax(price, country) {
    // if wrong country

    return (price / 100 * TAX[country]).toFixed(2)
}

export {calculateTax};
