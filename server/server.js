require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')

, cors = require('cors')

const app = express();
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    console.log('hi')
    res.status(200).send('Gnarly dude')
})

const port = 3500;

app.listen(port, () => console.log(`listening on port ${port}`));