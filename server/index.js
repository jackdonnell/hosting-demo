const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/main.js'))
})

const port = process.env.PORT || 4005


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})