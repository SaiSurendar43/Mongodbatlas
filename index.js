const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors');
const routes = require('./Router/Routes')


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Your routes and other middleware here
app.use(cors());
  
app.use('/',routes)

const dbconnection = require('./DBconnection/Db');
dbconnection.database()

const port = 3007; 

   app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });