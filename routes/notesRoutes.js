const express = require('express')
const router = express.Router()
const fs = require('fs')
const dbData = require('../db/db.json')
const { v4: uuidv4 } = require('uuid')
 
router.get('/', (req, res) => {
    let info = JSON.parse(fs.readFileSync(dbData, 'utf8'))
    res.json(info)
})

router.post('/', (req, res) => {
    let newNote = req.body
    console.log(newNote)
    newNote.id = uuidv4()
    let noteData = JSON.parse(fs.readFileSync(dbData, 'utf8'))
    dbData.push(noteData)

    fs.writeFileSync('../db/db.json', JSON.stringify(dbData, null, 4))
    console.log("Done")
    res.status(200).json(noteData)
})


router.delete("/:id", (req, res) => {
    let noteID = req.params.id.toString()
    let noteData = JSON.parse(fs.readFileSync(dbData, 'utf8'))

    const newData = noteData.filter(note => note.id.toString() !== noteID)

    fs.writeFileSync('../db/db.json', JSON.stringify(newData, null, 4))
    res.json(newData)
})

module.exports = router