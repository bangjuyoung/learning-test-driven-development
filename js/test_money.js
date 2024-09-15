const assert = require('assert');

class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}

let fiver = new Dollar(10);
let tenner = fiver.times(2);
assert.strictEqual(tenner.amount, 20);

let tenEuros = new Money(10, "EUR");
let twentyEuros = tenEuros.times(2)
assert.strictEqual(twentyEuros.amount, 20);
assert.strictEqual(twentyEuros.currency, "EUR");