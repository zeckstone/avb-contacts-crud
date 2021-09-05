const { Router } = require('express');
const { getContact } = require('../utils/db-utils');

const router = Router();

router.get('/', async (req, res) => {
    const { id } = req.params;
    
    const response = await getContact(id);
    
    res.status(200).json(response);
});

module.exports = router;