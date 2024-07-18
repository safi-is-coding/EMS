const express = require('express')
const { getAttendance, createAttendance, deleteAttendance, updateAttendance, findSingleAttendance } = require('../controllers/attendance.controller.js')

const router = express.Router()

// getting all the Attendance data
router.get('/', getAttendance)

// posting the Attendance data
router.post('/', createAttendance)

// deleting the Attendance by id
router.delete('/:id', deleteAttendance)

// updating the Attendance by id
router.put('/:id', updateAttendance)

// finding single Attendance by id
router.get('/:id', findSingleAttendance)

module.exports = router