// run: node app.js

import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }))  // to tell Express that the data will be URL encoded (to be able to use req.body.name)

const people = [
    { name: 'Flavio' },
    { name: 'Roger' }
]

app.get('/', (req, res) => {
    const page = `
        <html>
          <body>
            <h1>Enter a new person:</h1>
            <form action="/person" method="POST">
              <input type="text" name="name" />
              <input type="submit">
            </form>
            <h2>List of people:</h2>
            <ul>
              ${people.map(person => `<li>${person.name}</li>`).join('')}
            </ul>
          </body>
        </html>
    `
    res.send(page)
})  // .join('') method to generate a string, otherwise .map() returns an array, and we’d see a comma in the resulting HTML

app.post('/person', (req, res) => {
    const name = req.body.name
    people.push({ name: name })
    res.redirect('/')  // to redirect the user back to the / URL, so he’ll see the list of updated people as a result
  })

app.listen(3000, () => console.log('Server ready'))
