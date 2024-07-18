const express = require('express')
// const Employees = require('../models/employee.model.js')
const { getEmployees, createEmployee, deleteEmployee, updateEmployee, findSingleEmployee } = require('../controllers/employees.controller.js')
const upload = require("../middlewares/multer.js")
const auth = require('../middlewares/auth.js')

const router = express.Router()

// getting all the employees data
router.get('/', getEmployees)

// posting the employee data
router.post('/', upload.single("empImage") ,createEmployee)

// deleting the employee by id
router.delete('/:id', deleteEmployee)

// updating the employee by id
router.patch('/:id', upload.single("image"), updateEmployee)

// finding single employee by id
router.get('/:id', findSingleEmployee)

module.exports = router

