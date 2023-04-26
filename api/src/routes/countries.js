const express = require('express');
const router = express.Router();
const {getCountryQuery, getCountryByID} = require('../handlers/handleCountries');

router.get('/', getCountryQuery);
router.get('/:idPais', getCountryByID);

module.exports = router;