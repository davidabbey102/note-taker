const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require("path")
const dbData = require('../db/notes.json')


router.get('/api/notes', (req, res) => res.json(dbData))

router.post('/api/notes/', (req, res) => {
    dbData.push(req.body)
    fs.writeFileSync('../db/notes.json', json.stringify(db))
    res.status(200).json(req.body)    
})

module.exports = router