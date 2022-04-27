const mongoose = require('mongoose');
const personagensService = require('../services/personagens-services');

const findPersonagensController = async (req, res) => {
    res.send( await personagensService.findPersonagensController());
};

const findPersonagemByIdController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'ID inválido' });
    };

    if (!( await personagensService.findPersonagemByIdController(req.params.id))) {
        return res.status(404).sen({ message: 'Personagem não localizado!' });
    };

    res.send( await personagensService.findPersonagemByIdController(req.params.id));
};

const createPersonagemController = async (req, res) => {
    if (!req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl) {
            return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
        }

        res.send( await personagensService.createPersonagemController(req.body));
};

const updatePersonagemController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        returnres.satatus(400).send({ message: 'ID inválido!' });
    };

    if (!( await personagensService.updatePersonagemController(req.params.id))) {
        return res.status(404).send({ message: 'Personagem não localizado!' });
    };

    if (
        !req.body || 
        !req.body.user || 
        !req.body.name ||
        !req.body.imageUrl
    ) {
        return res.status(400).send({ message: 'Os campos não foram preenchidos corretamente!' });
    };

    res.send( await personagensService.updatePersonagemController(req.params.id));
};

const deletePersonagemController = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        returnres.satatus(400).send({ message: 'ID inválido!' });
    }; 

    if (!( await personagensService.deletePersonagemController(req.params.id))) {
        return res.status(404).send({ message: 'Personagem não localizado!' });
    };

    await personagensService.deletePersonagemController(req.params.id);
    res.send({ message: 'Personagem deletado com sucesso!' });
};



module.exports = {
    findPersonagensController,
    findPersonagemByIdController,
    createPersonagemController,
    updatePersonagemController,
    deletePersonagemController
};
