
//dummy data storage
const products = []

/* Properties - id, name, price, category
 * methods -
 * instance methods - save()
 * static methods - findById(), findByIdAndUpdate(), findByIdAndDelete(), findAll(), count() 
*/

function Product(data){
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.category = data.category
    //instance methods
    this.save = function(){
        products.push(this)
    }
    this.details = function(){
        return `${this.id}. ${this.name} - ${this.price} - ${this.category}`
    }
}


// p1.save()
const p1 = new Product({
    id: 1, 
    name: 'Product 1',
    price: 100,
    category: 'Category 1'
})
p1.save()
const p2 = new Product({
    id: 2, 
    name: 'Product 2',
    price: 200,
    category: 'Category 1'
})
p2.save()
//console.log(products)


//static methods


//findAll()
Product.findAll = function(){
    //return products
    //products.forEach(function(product){
    // return `${product.id} - ${product.name} -  ${product.price} - ${product.category}`
    //return product.id
    //})
}
//console.log(Product.findAll)


//findById()
Product.findById = function(id){
    const product = products.find(function(product){
        return product.id === id
    })
    if(product){
        return product
    }else{
        return 'product not found'
    }
}
//console.log(Product.findById(2))


//FindByIdAndUpdate()
Product.FindByIdAndUpdate = function(id,data){
    const product = products.find(function(product){
        return product.id === id
    })
    if(product){
        Object.assign(product,data)
        return {
            product: product,
            notice: 'product updated'
        }
    }else{
        return 'product not found'
    }
}
//console.log(Product.FindByIdAndUpdate(2 ,{name: 'Product 4'}))


//count()
Product.count = function(){
    return products.length
}
//console.log(Product.count())


//FindByIdAndDelete()
Product.FindByIdAndDelete = function(id){
    const product = products.find(function(product){
        return product.id === id
    })
    if(product){
        //findIndex
        const all_products = products.filter(function(all_product) {
            return all_product.id != product.id 
        })
        return {
            products: all_products,
            notice: `product id - ${id} deleted`
        }
    }else{
        return 'product not found'
    }
}
//console.log(Product.FindByIdAndDelete(1))


//findByCategory()
Product.findByCategory = function(category){
    const products = products.filter(function(product){
        return product.category === category
    })
    if(products){
        return products
    }else{
        return 'product not found'
    }
}
//console.log(Product.findByCategory('Category 1'))