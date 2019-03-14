const axios = require('axios')

const key = 'pRPLCejozFwCHFbVCR'
const name = process.argv[2] //to read the input while executing files

const url = `https://gender-api.com/get?name=${name}&key=${key}`

axios.get(url)
    .then(function(response){
        const data = response.data
        console.log(`The gender of ${name} is ${data.gender}`)
    })
    .catch(function(error){
        console.log(error.message)
    })