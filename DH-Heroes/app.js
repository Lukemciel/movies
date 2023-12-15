const express = require('express')

const app = express()

const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(3030, () => {
    console.log('Servidor corriendo')
});

app.get('/home', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/index.html')
})

app.get('/babbage', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/babbage.html')
})

app.get('/clarke', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/clarke.html')
})

app.get('/berners-lee', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/berners-lee.html')
})

app.get('/hamilton', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/hamilton.html')
})

app.get('/hopper', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/hopper.html')
})

app.get('/lovelace', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/lovelace.html')
})

app.get('/turing', (req, res) => {
    res.sendFile('C:/Users/Luke/Documents/Curso FullStack/TP ejercitacion de servidores/DH-Heroes/views/turing.html')
})


