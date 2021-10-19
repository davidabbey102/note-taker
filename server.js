const express = require('express')
const fs = require('fs')
const path = require('path')
const dbData = require('./db/db.json')

const app = express()
const PORT = 3000

app.use(express.urlencoded({ entended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.send(path.join(__dirname, '/index.html'))
})

app.get('/api/notes', (req, res) => res.json(notes))

app.post('/api/notes/', (req, res) => {
    dbData.push(req.body)
    fs.writeFileSync('./db/db.json', json.stringify(db))
    res.status(200).json(req.body)    
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  })