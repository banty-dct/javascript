const cartLineItem = {
    id: 1,
    name: 'The Fox',
    price: 200,
    quantity: 0,
    details: function(){
        return `${this.name} - ${this.quantity} - ${this.price} - ${this.quantity * this.price}`
    },
    changeQty: function(qty){
        if(qty > 1){
            this.quantity = qty
        }
    }
}

cartLineItem.changeQty(3)
console.log(cartLineItem.details())

cartLineItem.changeQty(-1)
console.log(cartLineItem.details())

cartLineItem.changeQty(2)
console.log(cartLineItem.details())