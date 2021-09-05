const { Router } = require('express');
const { deleteContact } = require('../utils/db-utils');
const router = Router();

router.get('/contacts/delete/:contactId', async (req, res) => {
    const { contactId } = req.params;

    const response = await deleteContact(contactId);
    
    res.status(200).json(response);
});

module.exports = router;