const { Supplier } = require('../models');

exports.getAll = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar fornecedores' });
    }
};

exports.create = async (req, res) => {
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
