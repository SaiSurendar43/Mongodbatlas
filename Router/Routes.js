const express = require('express');
const router = express.Router();

const userdata = require('../userdata/Userdata')

router.post('/api/user',userdata.userdetails)
router.get('/api/usergetdata/',userdata.usergetdata)
router.get('/api/usergetdata/:id',userdata.usergetid)

module.exports = router;