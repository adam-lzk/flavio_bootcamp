// run: node index.js
// open http://localhost:3000 to see result
// to get people: http://localhost:3000/people
// to get person by id: http://localhost:3000/person/1

import express from 'express'
const app = express()

const people = [
    { id: 1, name: 'Flavio' },
    { id: 2, name: 'Roger' }
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/people', (req, res) => {
    res.json(people)
})

app.get('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
        res.json(person)
        return
    }

    res.sendStatus(404)
})

app.listen(3000, () => console.log('Server ready'))
