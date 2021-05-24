module.exports =  class Checkout{

    constructor(){
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }
    addItemPrice(item, price){
        this.prices[item] = price;
    }

    addItem(item){
        if (this.prices[item] == undefined)
            throw('no price defined for item' + item);
        if (this.items[item] == undefined)
            this.items[item] = 1
        else
            this.items[item]++;
    }

    calculateTotal(){
        let total = 0;
        for (let item in this.items){
            let discount = this.discounts[item];
            if (discount != undefined ){
                total += (this.items[item] / discount.qty) * discount.price;
                total += (this.items[item] % discount.qty) * this.prices[item];
            }
            else
                total += (this.prices[item] * this.items[item])
        }
       return total;
    }

    addDiscount(item, itemQty, discountPrice){
        this.discounts[item] = {qty:itemQty, price: discountPrice }
    }
}