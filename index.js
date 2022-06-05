const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('http')
const port = 3000



app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/coinflip', (request, response)=>{
    let coin = {}
    if(Math.random()< 0.5){
        coin['result'] = 'heads'
    }else{
        coin['result'] = 'tails'
    }
    response.send(coin)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


