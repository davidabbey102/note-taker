const express = require('express')
const logReq = require('./midddleware/logRequest')
const htmlRoutes = require('./routes/htmlRoutes')
const notesRoute = require("./routes/notesRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(logReq)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(htmlRoutes)
app.use('/api/notes', notesRoute)


app.listen(PORT, () => {
    console.log(`listening to port http://localhost:${PORT}`)
})
