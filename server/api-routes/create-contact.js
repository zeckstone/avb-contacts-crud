const { Router } = require('express');
const { v4 } = require('uuid');
const { createContact } = require('../utils/db-utils');
const router = Router();

router.post('/contacts', async (req, res) => {
    const response = await createContact(req.body);
    
    res.status(201).json(response);
});

module.exports = router;