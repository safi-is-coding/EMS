const express = require('express')
const { getLeave, createLeave, deleteLeave, updateLeave, findSingleLeave } = require('../controllers/leave.controller.js')

const router = express.Router()

// getting all the Leave data
router.get('/', getLeave)

// posting the Leave data
router.post('/', createLeave)

// deleting the Leave by id
router.delete('/:id', deleteLeave)

// updating the Leave by id
router.put('/:id', updateLeave)

// finding single Leave by id
router.get('/:id', findSingleLeave)

module.exports = router