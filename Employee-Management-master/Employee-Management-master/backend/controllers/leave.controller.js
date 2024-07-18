const Leaves = require('../models/leave.model.js')

const createLeave = async (req, res) => {
    try {        
        const leave = await Leaves.create(req.body)
        res.status(200).json(leave)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getLeave = async (req, res) => {
    try {
        const leaves = await Leaves.find({}).populate('employeeId').exec()
        res.status(200).json(leaves)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateLeave = async (req, res) => {
    try {
        const { id } = req.params

        const leave = await Leaves.findById(id)

        if(!leave){
            res.status(400).json({message: "Leave not found"})
        }

        const updateLeave = await Leaves.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "Leave updated successfully", updateLeave})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteLeave = async (req, res) => {
    try {
        const { id } = req.params
        const leave = await Leaves.findById(id)

        if(!leave){
            res.status(400).json({message: "Leave not found"})
        }

        const deleteLeave = await Leaves.findByIdAndDelete(id)
        res.status(200).json({message: "Leave deleted successfully"})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findSingleLeave = async (req, res) => {
    try {
        const { id } = req.params
        const leave = await Leaves.findById(id).populate('employeeId').exec()

        if(!leave){
            res.status(400).json({message: "Leave not found"})
        }

        res.status(200).json(leave)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createLeave,
    getLeave,
    updateLeave,
    deleteLeave,
    findSingleLeave
}
