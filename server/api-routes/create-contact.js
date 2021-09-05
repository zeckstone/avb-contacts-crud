const { Router } = require('express');
const { v4 } = require('uuid');
const { createContact } = require('../utils/db-utils');
const router = Router();

router.get('/contacts', async (req, res) => {
    const response = await createContact(req.body.newUser);
    
    res.status(200).json(response);
});

module.exports = router;