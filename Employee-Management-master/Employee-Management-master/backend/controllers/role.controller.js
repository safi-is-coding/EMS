const Roles = require('../models/role.model.js')

const createRole = async (req, res) => {
    try {        
        const role = await Roles.create(req.body)
        res.status(200).json(role)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getRole = async (req, res) => {
    try {
        const role = await Roles.find({})
        res.status(200).json(role)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateRole = async (req, res) => {
    try {
        const { id } = req.params

        const role = await Roles.findById(id)

        if(!role){
            res.status(400).json({message: "Role not found"})
        }

        const updateRole = await Roles.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Role updated successfully", updateRole})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Roles.findById(id)

        if(!role){
            res.status(400).json({message: "Role not found"})
        }

        const deleteRole = await Roles.findByIdAndDelete(id)
        res.status(200).json({message: "Role deleted successfully"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Roles.findById(id)

        if(!role){
            res.status(400).json({message: "Role not found"})
        }

        res.status(200).json(role)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createRole,
    getRole,
    updateRole,
    deleteRole,
    findSingleRole
}
