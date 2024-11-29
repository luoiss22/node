import { Sequelize } from "sequelize";
import config from "../config/config.js";
import { Paciente, PacienteSchema } from "./paciente.model.js";



function setUpModels(sequelize){
    Paciente.init(PacienteSchema, Paciente.config(sequelize));


    //RELACIONES

}

const sequelize = new Sequelize(
    config.dbName, 
    config.dbUser, 
    config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres'
});

sequelize.sync();
setUpModels(sequelize);

export {
    setUpModels
}


