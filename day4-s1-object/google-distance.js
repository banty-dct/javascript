const data = {
    "destination_addresses": ["Mangaluru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "352 km",
                        "value": 351881
                    },
                    "duration": {
                        "text": "6 hours 52 mins",
                        "value": 24747
                    },
                    "duration_in_traffic": {
                        "text": "7 hours 2 mins",
                        "value": 25339
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

function formatData(data){
    const source = data.origin_addresses
    const destination = data.destination_addresses
    const distance = data.rows[0].elements[0].distance.text
    const duration = data.rows[0].elements[0].duration.text
    return `The distance from ${source[0].split(', ')[0]} to ${destination[0].split(', ')[0]} is ${distance} and the time taken to travel is ${duration}`
}

console.log(formatData(data))