const Checkout = require('../checkout.js');
var expect = require('chai').expect;

beforeEach( function(){
    checkout =  new Checkout();
    checkout.addItemPrice('a',1);
    checkout.addItemPrice('b',2);
});

it('can calculate the current total', function(){
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('can add multiple items and get correct total', function(){
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('can add discount rule', function(){
    checkout.addDiscount('a',3,2);
});

it('can apply discount rules to the total', function(){
    checkout.addDiscount('a',3,2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);

});

it('throws exception when item added with no price', function(){
    expect(function(){checkout.addItem('c')}).to.throw();
});