const express = require('express')
const app = express()

// TEMP: hardcoded data
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// we define two routes to the application (GET)
// 1. to the root
// 2. to the persons path
app.get('/', (request, response) => {
    response.send('<h1>HELLO WORLD</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

//initialize server on port 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})