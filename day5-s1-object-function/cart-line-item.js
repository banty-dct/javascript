const cartLineItem = {
    id: 1,
    name: 'idly',
    price: 20,
    quantity: 0,
    details: function(){
        return `${this.name} - ${this.quantity} - ${this.price} - ${this.quantity * this.price}`
    },
    increaseQty: function(){
        this.quantity = this.quantity + 1
    },
    decreaseQty: function(){
        this.quantity = this.quantity - 1
    },
    resetQty: function(){
        this.quantity = 0
    }
}

console.log(cartLineItem.details())

cartLineItem.increaseQty()
console.log(cartLineItem.details())

cartLineItem.increaseQty()
console.log(cartLineItem.details())

cartLineItem.decreaseQty()
console.log(cartLineItem.details())

cartLineItem.resetQty()
console.log(cartLineItem.details())