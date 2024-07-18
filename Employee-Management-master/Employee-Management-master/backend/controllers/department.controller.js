const Departments = require('../models/department.model.js')

const createDepartment = async (req, res) => {
    try {        
        const department = await Departments.create(req.body)
        res.status(200).json(department)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getDepartment = async (req, res) => {
    try {
        const department = await Departments.find({})
        res.status(200).json(department)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateDepartment = async (req, res) => {
    try {
        const { id } = req.params

        const department = await Departments.findById(id)

        if(!department){
            res.status(400).json({message: "Department not found"})
        }

        const updateDepartment = await Departments.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Department updated successfully", updateDepartment})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const department = await Departments.findById(id)

        if(!department){
            res.status(400).json({message: "Department not found"})
        }

        const deleteDepartment = await Departments.findByIdAndDelete(id)
        res.status(200).json({message: "Department deleted successfully"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleDepartment = async (req, res) => {
    try {
        const { id } = req.params
        const department = await Departments.findById(id)

        if(!department){
            res.status(400).json({message: "Department not found"})
        }

        res.status(200).json(department)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createDepartment,
    getDepartment,
    updateDepartment,
    deleteDepartment,
    findSingleDepartment
}
