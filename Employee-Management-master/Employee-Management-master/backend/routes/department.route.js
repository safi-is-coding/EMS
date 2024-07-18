const express = require('express')
const { getDepartment, createDepartment, deleteDepartment, updateDepartment, findSingleDepartment } = require('../controllers/Department.controller.js')

const router = express.Router()

// getting all the Department data
router.get('/', getDepartment)

// posting the Department data
router.post('/', createDepartment)

// deleting the Department by id
router.delete('/:id', deleteDepartment)

// updating the Department by id
router.put('/:id', updateDepartment)

// finding single Department by id
router.get('/:id', findSingleDepartment)

module.exports = router

