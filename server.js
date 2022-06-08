const express = require('express')
const app = express()
const PORT = 8001


const movies = {
    'clerks': {
        'name': 'Clerks',
        'releaseYear': 1994,
    },
    'mallrats': {
        'name': 'Mallrats',
        'releaseYear': 1995,
    },
    'chasing amy': {
        'name': 'Chasing Amy',
        'releaseYear': 1997,
    },
    'dogma': {
        'name': 'Dogma',
        'releaseYear': 1999,
    },
    'jay and silent bob strike back': {
        'name': 'Jay and Silent Bob Strike Back',
        'releaseYear': 2001,
    },
    'jersey girl': {
        'name': 'Jersey Girl',
        'releaseYear': 2004,
    },
    'clerks ii': {
        'name': 'Clerk II',
        'releaseYear': 2006,
    },
    'zack and miri make a porno': {
        'name': 'Zach and Miri Make a Porno',
        'releaseYear': 2008,
    },
    'cop out': {
        'name': 'Cop Out',
        'releaseYear': 2010,
    },
    'red state': {
        'name': 'Red State',
        'releaseYear': 2011,
    },
    'jay and silent bob super groove cartoon movie!': {
        'name': 'Jay & Silent Bob\'s Super Groovy Cartoon Movie!',
        'releaseYear': 2006,
    },
    'tusk': {
        'name': 'Tusk',
        'releaseYear': 2014,
    },
    'yoga hosers': {
        'name': 'Yoga Hosers',
        'releaseYear': 2016,
    },
    'jay and silent bob reboot': {
        'name': 'Jay and Silent Bob Reboot',
        'releaseYear': 2019,
    },
    'clerks iii': {
        'name': 'Clerk III',
        'releaseYear': 2022,
    },
    'killroy was here': {
        'name': 'Killroy Was Here',
        'releaseYear': 2022,
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:searchurl', (request, response)=>{
    const searchString = request.params.searchurl.toLowerCase()
    if (movies[searchString]) {
        response.json(movies[searchString])
    } else {
        response.json('unknown')
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`I'm listening on...`)
    console.log(`${PORT}`)
})