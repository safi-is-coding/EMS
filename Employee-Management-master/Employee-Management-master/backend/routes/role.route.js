const express = require('express')
const { getRole, createRole, deleteRole, updateRole, findSingleRole } = require('../controllers/role.controller.js')

const router = express.Router()

// getting all the Role data
router.get('/', getRole)

// posting the Role data
router.post('/', createRole)

// deleting the Role by id
router.delete('/:id', deleteRole)

// updating the Role by id
router.put('/:id', updateRole)

// finding single Role by id
router.get('/:id', findSingleRole)

module.exports = router

