const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const router = Router();

router.get('/contacts/email/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const response = await manipulateCollection(contactId);
    
    res.status(200).json(response);
});

module.exports = router;