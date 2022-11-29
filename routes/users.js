var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(db.findUser());
 
});

router.post('/', (request, response)=> {
const user = db.insertUser(request.body);
response.status(201).json(user);
})

module.exports = router;
