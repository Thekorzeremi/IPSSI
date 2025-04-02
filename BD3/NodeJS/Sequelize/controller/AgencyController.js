import Agency from "../model/Agency.js";

export const getAgency = async (req, res) => {
    const agencies = await Agency.findAll();
    agencies ? 
        res.status(200).json(agencies) :
        res.status(200).json({ message: "No agencies found" });
};

export const getAgencyById = async (req, res) => {
    const agencies = await agencies.findByPk(req.params.id);
    agencies ?
        res.status(200).json(agencies) :
        res.status(404).json({ message: "Agency not found" });
};

export const deleteAgency = async (req, res) => {
    const agencies = await agencies.drop(req.params.id);
    agencies ?
        res.status(200).json(agencies) :
        res.status(404).json({ message: "Agency not found" });
};

export const createAgency = async (req, res) => {
    const { name, address } = req.body;
    const agencies = await agencies.create({ name, address });
    agencies ?
        res.status(201).json(agencies) :
        res.status(400).json({ message: "Error creating Agency" });
};