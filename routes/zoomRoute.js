const express = require('express');
const { zoomConnect,zoomCallback,zoomRefresh,zoomRegisterWebinar,zoomParticipants,zoomMergedReport, getZoomOccurrences } = require('../controller/zoomController');

const router = express.Router();

//for initial token 
router.get('/connect',zoomConnect)
router.get('/oauth/callback',zoomCallback)

//refresh Token
router.get('/refresh',zoomRefresh)

router.get('/occurrences/',getZoomOccurrences)

router.post('/register-webinar',zoomRegisterWebinar)
router.get('/participants',zoomParticipants)

router.get('/webinar/merged-report',zoomMergedReport)


module.exports = router
