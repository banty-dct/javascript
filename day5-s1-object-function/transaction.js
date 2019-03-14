const customer = {
    name: 'Banty',
    balance: 1000,
    accNo: 1234567890,
    displayBalance: function(){
        return `Available Balance - ${this.balance}`
    },
    transaction: function(amount,code){
        if(code == 1){
            this.balance += amount
            return this.displayBalance()
        }else if(code == 0){
            if(this.balance < amount){
                return 'insufficient funds'
            }else{
                this.balance -= amount
                return this.displayBalance()
            }
        }else{
            return 'invalid input'
        }
    }
}

console.log(customer.displayBalance())
console.log(customer.transaction(500,1))
console.log(customer.transaction(500,0))
console.log(customer.transaction(500,0))
console.log(customer.transaction(1000,0))
console.log(customer.transaction(1000,3))