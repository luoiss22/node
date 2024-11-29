import { Sequelize } from "sequelize";
import config from "../config/config.js";
import { Paciente, PacienteSchema } from "./paciente.model.js";

function setUpModels(sequelize) {
    Paciente.init(PacienteSchema, Paciente.config(sequelize));
    // RELACIONES
}

const sequelize = new Sequelize(
    config.dbName, 
    config.dbUser, 
    config.dbPassword, {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres'
});

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        setUpModels(sequelize);
        await sequelize.sync({ force: true }); // Use force: true to drop and recreate tables
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error; // Ensure the error is propagated
    }
}

export {
    setUpModels,
    initializeDatabase
}