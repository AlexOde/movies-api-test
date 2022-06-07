const express = require('express')
const app = express()
const PORT = 8000

const directorAndMovies = {
    'kevin smith': {
        'clerks': {
            'name': 'Clerks',
            'releaseYear': 1994,
            'genre': 'comedy',
            'personalRating': '1st place'
        },
        'mallrats': {
            'name': 'Mallrats',
            'releaseYear': 1994,
            'genre': 'comedy',
            'personalRating': '1st place'
        },
        'dogma': {
            'name': 'Dogma',
            'releaseYear': 1994,
            'genre': 'comedy',
            'personalRating': '1st place'
        }
    },
    'thomas': {
        'movie 1': {
            'name': 'Movie 1',
            'releaseYear': 1998,
            'genre': 'drama',
            'personalRating': '1st place'
        },
    },
    'unknown': {
        'Search string': 'Empty'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:searchURL', (request, response)=>{
    const searchString = request.params.searchURL.toLowerCase()
    if (directorAndMovies[searchString]) {
        response.json(directorAndMovies[searchString])
    } else {
        response.json('unknown')
    }
})

app.listen(PORT, ()=>{
    console.log(`I'm listening on...`)
    console.log(`${PORT}`)
})