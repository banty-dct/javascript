const axios = require('axios')

const key = 'AIzaSyAjhH-5OzObMll7shQgtXB0iMnr0FMKwwc'
const source = process.argv[2]
const destination = process.argv[3]

const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${source}&destinations=${destination}&key=${key}`

axios.get(url)
    .then(function(response){
        const data = response.data

        const g_source = data.origin_addresses[0].split(", ")[0]
        const g_destination = data.destination_addresses[0].split(", ")[0]

        const kms = data.rows[0].elements[0].distance.text
        const duration = data.rows[0].elements[0].duration.text

        console.log(`The distance between ${g_source} and ${g_destination} is ${kms} and duration is ${duration}`)
    })
    .catch(function(error){
        console.log(error.message)
    })