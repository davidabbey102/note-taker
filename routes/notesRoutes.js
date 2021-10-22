const express = require('express')
const router = express.Router()
const fs = require('fs')
const dbData = require('../db/db.json')
// (../db/db.json')



router.get('/', (req, res) => res.json(dbData))

router.get("/:id", (req, res) => {
    for (let i = 0; i < dbData.length; i++) {
        if (dbData[i].id == req.params.id) {
            return res.json(dbData[i])
        }
    }
    res.status(404).send("No note found")
})

router.post('/', (req, res) => {
    console.log(req.body)
    dbData.push(req.body)
    fs.writeFileSync('../db/db.json', JSON.stringify(dbData, null, 4))
    console.log("Done")
    res.status(200).json(req.body)
})

module.exports = router