import { Paciente } from "../src/models/paciente.model.js";

class PacienteService {
    async create(paciente) {
        return Paciente.create(paciente);
    }

    async getAll() {
        return Paciente.findAll();
    }

    async getById(id) {
        return Paciente.findByPk(id);
    }

    async update(id, paciente) {
        return Paciente.update(paciente, {
            where: {
                id: id
            }
        });
    }

    async delete(id) {
        return Paciente.destroy({
            where: {
                id: id
            }
        });
    }
}

export default PacienteService;