// a basic HTTP server built with Express
// run: node index.js
// open http://localhost:3000 to see result

import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Server ready'))
