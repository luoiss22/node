import PacienteService from "../services/paciente.service.js";

const pacienteService = new PacienteService();

const post = async (req, res) => {
    try {
        const paciente = req.body;
        const result = await pacienteService.create(paciente);
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const get = async (req, res) => {
    try {
        const result = await pacienteService.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pacienteService.getById(id);
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const put = async (req, res) => {
    try {
        const id = req.params.id;
        const paciente = req.body;
        const result = await pacienteService.update(id, paciente);
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pacienteService.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


export default {
    post,
    get,
    getById,
    put,
    remove
}