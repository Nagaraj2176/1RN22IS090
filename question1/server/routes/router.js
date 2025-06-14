const express = require('express');
const { getAverages, numberpost } = require('../controller/averages');

const router = express.Router();

router.get("/getnumavg", getAverages);
router.post("/getnumavg", numberpost);

module.exports = router;