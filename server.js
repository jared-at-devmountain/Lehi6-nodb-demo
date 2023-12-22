import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())

let newGlobalId = 4

const db = [
    {
        description: 'Firebreather',
        rate: 100,
        hours: 60,
        id: 1
    },
    {
        description: 'Shoe Shiner',
        rate: 120,
        hours: 1,
        id: 2
    },
    {
        description: 'Tent Master',
        rate: 30,
        hours: 100,
        id: 3
    }
]

app.put('/edit-job/:id', (req, res) => {
    let id = +req.params.id
    let editedJob = req.body
    editedJob.rate = +editedJob.rate
    editedJob.hours = +editedJob.hours

    for (let i = 0; i < db.length; i++) {
        if (db[i].id === id) {
            db.splice(i, 1, editedJob)
            break
        }
    }

    res.status(200).send(db)
})

// app.listen(3000, () => {console.log('listening on 3000')})
ViteExpress.listen(app, 3000, () => {console.log('listening on 3000')})