const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let cards = [{id:'1', name: 'First Cards', status: 'TO DO', priority: 2},
    {id:'2', name: 'Second Cards', status: 'TO DO', priority: 1},
    {id:'3', name: 'Third Cards', status: 'Progress', priority: 3},
]

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!')
})
app.get('/cards', (req, res) => {
    res.send(cards)
})
app.delete('/cards/:cardId', (req, res) => {
   const cardId = req.params.cardId;

   cards = cards.filter(el => el.id !== cardId)

    res.send(cards)
})
app.post('/cards',(req, res)=>{
    const card = req.body;
    cards.push({_id:Math.random().toString(), ...card});
    res.send('Card created')
})

app.patch('/cards/:cardId',(req, res)=>{
    const cardId = req.params.cardId;
    const card = req.body;

    cards = cards.map(el => el.id === cardId ? ({ ...card, id:el.id}) : el)

    res.send('Card Updated')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})