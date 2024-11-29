import { Model, DataTypes } from "sequelize";

const TABLE_NAME = "paciente";


class Paciente extends Model {
    static config(sequelize) {
        return {
        sequelize,
        tableName: TABLE_NAME,
        modelName: "Cliente",
        timestamps: false,
        };
    }
}

const PacienteSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    contacto_emergencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

export {Paciente, PacienteSchema};