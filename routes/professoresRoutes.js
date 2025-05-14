const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');

// Rotas
router.get('/', professoresController.listarProfessores);
router.get('/:id', professoresController.buscarProfessorPorId);
router.get('/:id/turmas', professoresController.listarTurmasPorProfessor);
router.put('/:id', professoresController.atualizarProfessor);
router.post('/:id/turmas', professoresController.adicionarTurmaAoProfessor);
router.get('/departamento/:departamento', professoresController.listarPorDepartamento);
router.delete('/:id', professoresController.removerProfessor);

module.exports = router;