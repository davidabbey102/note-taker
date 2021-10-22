const express = require('express')
const router = express.Router()
const fs = require('fs')
let dbData = require('../db/db.json')
const { v4: uuidv4 } = require('uuid')

router.get('/', (req, res) => res.json(dbData))

router.post('/', (req, res) => {
    let { title, text } = req.body
    let addNote = { title, text, id: uuidv4() }
    dbData.push(addNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(dbData, null, 4))
    console.log("Done")
    res.status(201).json(addNote)
})

router.delete("/:id", (req, res) => {
    let noteID = req.params.id
    dbData = dbData.filter(note => note.id != noteID)
    fs.writeFileSync('./db/db.json', JSON.stringify(dbData, null, 4))
    return res.json(dbData)
})

module.exports = router