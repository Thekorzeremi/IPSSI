import Vehicules from "../model/Vehicule.js";

export const getVehicles = async (req, res) => {
    const vehicules = await Vehicules.findAll();
    vehicules ? 
        res.status(200).json(vehicules) :
        res.status(200).json({ message: "No vehicles found" });
};

export const getVehiclesById = async (req, res) => {
    const vehicule = await Vehicules.findByPk(req.params.id);
    vehicule ?
        res.status(200).json(vehicule) :
        res.status(404).json({ message: "Vehicle not found" });
};

export const deleteVehicle = async (req, res) => {
    const vehicule = await Vehicules.drop(req.params.id);
    vehicule ?
        res.status(200).json(vehicule) :
        res.status(404).json({ message: "Vehicle not found" });
};

export const createVehicle = async (req, res) => {
    const { libelle, prix_j } = req.body;
    const vehicule = await Vehicules.create({ libelle, prix_j });
    vehicule ?
        res.status(201).json(vehicule) :
        res.status(400).json({ message: "Error creating vehicle" });
};

export const getVehiclesByBrand = async (req, res) => {
    const vehicule = await Vehicules.findAll({ where: { libelle: req.params.libelle } });
    vehicule ?
        res.status(200).json(vehicule) :
        res.status(404).json({ message: "Vehicle not found" });
};