const express = require('express')
const path = require('path')
const app = express()
const PORT = 3002
const db = require('./db/db.json')
const fs = require('fs')


app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (res, req) => res.send('/index.html'))

// app.get('/secondary', (req, res) => res.sendFile(path.join(__dirname, './public/second.html')))

// app.get('/test', (req, res) => res.sendFile(path.join(__dirname, './testing/index.html')))

app.get('/api/hockey', (req, res) => res.json(db))

app.post('/api/hockey/', (req, res) => {
    db.push(req.body)

    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.status(200).json(req.body)
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  })
