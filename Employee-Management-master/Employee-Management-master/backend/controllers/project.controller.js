const Projects = require('../models/project.model.js')

const getProjects = async (req, res) => {
    try {

        const project = await Projects.find({})
        .populate('managerId')
        .populate('departmentId')
        .exec()
        
        res.status(200).json(project)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


const createProjects = async (req, res) => {
    try {
        
        const project = await Projects.create(req.body)
        res.status(200).json(project)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProjects = async (req, res) => {
    try {
        
        const { id } = req.params

        // Check if the project exists
        const project = await Projects.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        const updateProject = await Projects.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Project Updated", updateProject})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProject = async (req, res) => {
    try {
        
        const { id } = req.params
        const project = await Projects.findByIdAndDelete(id)

        if(!project){
            res.status(400).json({message: "Project not found !!"})
        }

        res.status(200).json({message: `Project deleted successfully`})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Projects.findById(id)

        if(!project){
            res.status(400).json({message: "Role not found"})
        }

        res.status(200).json(project)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { 
    getProjects, 
    createProjects,
    updateProjects,
    deleteProject,
    findSingleProject
}