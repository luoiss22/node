import express from "express";
import pacienteRouter from "./paciente.routes.js";

function routes(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('', pacienteRouter);

}


export default routes;