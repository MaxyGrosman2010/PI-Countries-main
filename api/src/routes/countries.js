const express = require('express');
const router = express.Router();
const {postCountry} = require('../handlers/handleCountries');

router.post('post/', postCountry);

module.exports = router;