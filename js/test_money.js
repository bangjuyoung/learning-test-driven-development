const assert = require('assert');

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }
}

let fiver = new Money(10, "USD");
let tenner = fiver.times(2);
assert.strictEqual(tenner.amount, 20);
assert.strictEqual(tenner.currency, "USD")


let tenEuros = new Money(10, "EUR");
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20);
assert.strictEqual(twentyEuros.currency, "EUR");