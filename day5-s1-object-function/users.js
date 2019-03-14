const axios = require('axios')
const url = 'http://jsonplaceholder.typicode.com/users'

//promise obj *****
axios.get(url)
    .then(function(response){
        const users = response.data
        users.forEach(function(user){
            console.log(`${user.id} - ${user.name}`)
        })
    }) //success
    .catch(function(error){
        console.log(error.message)
    }) //failed