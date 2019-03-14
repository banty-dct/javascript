const axios = require('axios')

const place_key = 'AIzaSyAjhH-5OzObMll7shQgtXB0iMnr0FMKwwc'
const temp_key = '9420412ea06900bf65aed0c75b69c041'

const place_name = process.argv[2]

const place_url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place_name}&inputtype=textquery&fields=geometry&key=${place_key}`

axios.get(place_url)
    .then(function(place_response){
        const place_data = place_response.data

        const lat = place_data.candidates[0].geometry.location.lat
        const lng = place_data.candidates[0].geometry.location.lng

        const temp_url = `https://api.darksky.net/forecast/${temp_key}/${lat},${lng}`

        axios.get(temp_url)
            .then(function(temp_response){
                const temp_data = temp_response.data
                const live_temp = temp_data.currently.temperature

                const c_temp = parseInt((live_temp - 32) * 5/9)

                console.log(`${place_name} - ${c_temp}${String.fromCharCode(176)}C`)
            })
            .catch(function(error){
                console.log(error.message)
            })
    })
    .catch(function(error){
        console.log(error.message)
    })