const express = require('express')
const router = express.Router()

const { createFirmSetting, getFirmSettings, getFirmSetting, deleteFirmSetting, updateFirmSetting, getFirmSettingsByTeamMember, getFirmSettingsByAdminUserId } = require('../controller/firmsettingController')

//*******************firmsetting START********************* */

router.get('/firmsetting', getFirmSettings)
router.get('/firmsetting/:id', getFirmSetting)
router.post('/firmsetting', createFirmSetting)
router.delete('/firmsetting/:id', deleteFirmSetting)
router.patch('/firmsetting/:id', updateFirmSetting)
router.get('/firmsetting/FirmSettingsByTeamMember/:id', getFirmSettingsByTeamMember)
router.get('/firmsetting/Firmsettingbyuserid/:id', getFirmSettingsByAdminUserId)

//*******************firmsetting END********************* */

module.exports = router

