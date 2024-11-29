import express from "express";
import pacienteController from "../controllers/paciente.controller.js";
const router = express.Router();


router
    .post('/paciente', pacienteController.post)
    .get('/paciente', pacienteController.get)
    .get('/paciente/:id', pacienteController.getById)
    .put('/paciente/:id', pacienteController.put)
    .delete('/paciente/:id', pacienteController.remove);


export default router;