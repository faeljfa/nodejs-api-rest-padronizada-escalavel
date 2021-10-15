const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const config = require('config')

app.listen(config.get('api.porta'), ()=>{
    console.log("Api funcionando na porta "+ config.get('api.porta'))
})