let professores = [
    { id: 1, nome: "João Silva", idade: 45, departamento: "Matemática", turmas: [] },
    { id: 2, nome: "Maria Oliveira", idade: 50, departamento: "História", turmas: [] }
];

// Funções do controlador
const listarProfessores = (req, res) => res.json(professores);

const buscarProfessorPorId = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(professorObjeto => professorObjeto.id == id);

    professor ? res.json(professor) : res.status(404).json({ mensagem: "Id não existente" });
};

const listarTurmasPorProfessor = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(professorObjeto => professorObjeto.id == id);

    professor ? res.json(professor.turmas) : res.status(404).json({ mensagem: "Id não existente" });
};

const atualizarProfessor = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(professorObjeto => professorObjeto.id == id);

    if (professor) {
        req.body.id = id; // Manter o ID original, caso não haja no body
        Object.assign(professor, req.body);
        res.json(professor);
    } else {
        res.status(404).json({ mensagem: "Id não existente" });
    }
};

const adicionarTurmaAoProfessor = (req, res) => {
    const id = req.params.id;
    const professor = professores.find(professorObjeto => professorObjeto.id == id);

    if (professor) {
        professor.turmas.push(req.body);
        res.json(professor);
    } else {
        res.status(404).json({ mensagem: "Id não existente" });
    }
};

const listarPorDepartamento = (req, res) => {
    const departamento = req.params.departamento;
    const filtrados = professores.filter(professorObjeto => professorObjeto.departamento === departamento);

    res.json(filtrados);
};

const removerProfessor = (req, res) => {
    const id = req.params.id;
    const index = professores.findIndex(professorObjeto => professorObjeto.id == id);

    if (index !== -1) {
        professores.splice(index, 1);
        res.json({ mensagem: "Professor removido com sucesso" });
    } else {
        res.status(404).json({ mensagem: "Id não existente" });
    }
};

// Exportando funções do controlador
module.exports = {
    listarProfessores,
    buscarProfessorPorId,
    listarTurmasPorProfessor,
    atualizarProfessor,
    adicionarTurmaAoProfessor,
    listarPorDepartamento,
    removerProfessor
};