const express = require('express')
const { getProjects, createProjects, deleteProject, updateProjects, findSingleProject } = require('../controllers/project.controller.js')

const router = express.Router()

// getting all the Project data
router.get('/', getProjects)

// posting the Project data
router.post('/', createProjects)

// deleting the Project by id
router.delete('/:id', deleteProject)

// updating the Project by id
router.put('/:id', updateProjects)

// finding single Project by id
router.get('/:id', findSingleProject)

module.exports = router

