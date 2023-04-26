const express = require('express');
const router = express.Router();
const {postActivity, getActivity} = require('../handlers/handleActivities');

router.post('/post', postActivity);
router.get('/get', getActivity);

module.exports = router;