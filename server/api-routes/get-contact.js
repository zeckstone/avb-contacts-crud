const { Router } = require('express');
const { getContact } = require('../utils/db-utils');

const router = Router();

router.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const response = await getContact(contactId);
    
    res.status(200).json(response);
});

module.exports = router;