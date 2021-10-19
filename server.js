const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const fs = require('fs')
const path = require('path')


app.use(express.urlencoded({ entended: true }))
app.use(express.json())
app.use(express.static('public'))


const htmlRoutes = require('./routes/htmlRoutes')
app.use(htmlRoutes)

const notesRoutes = require('./routes/notesRoutes')
app.use('/api/notes', notesRoutes)

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen( PORT,()=>{
    console.log(`Listening to port http://localhost/${PORT}`)
})
