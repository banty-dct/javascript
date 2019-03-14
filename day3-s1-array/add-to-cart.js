const cart = []
console.log(cart)

function addToCart(cart, item){
    const product = cart.find(function(inCartItem){
        return inCartItem.id == item.id
    })
    if(product){
        product.quantity = product.quantity + item.quantity
        product.price = product.price + item.price
    }else{
        cart.push(item)
    }
}

addToCart(cart, { id: 1, name: 'blr', price: 145, quantity: 1})
addToCart(cart, { id: 2, name: 'motor', price: 145, quantity: 1})
addToCart(cart, { id: 1, name: 'blr', price: 145, quantity: 1})
addToCart(cart, { id: 1, name: 'blr', price: 145, quantity: 1})

console.log(cart)