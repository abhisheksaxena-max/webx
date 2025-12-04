const express = require('express');
const { zoomConnect,zoomCallback,zoomRefresh,zoomRegisterWebinar,zoomParticipants,zoomMergedReport } = require('../controller/zoomController');

const router = express.Router();

router.get('/connect',zoomConnect)
router.get('/oauth/callback',zoomCallback)
router.get('/refresh',zoomRefresh)
router.post('/register-webinar',zoomRegisterWebinar)
router.get('/participants',zoomParticipants)
router.get('/webinar/merged-report',zoomMergedReport)

module.exports = router
