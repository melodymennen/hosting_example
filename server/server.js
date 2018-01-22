require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')

, cors = require('cors')

const app = express();
app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

const port = 3500;

app.listen(port, () => console.log(`listening on port ${port}`));