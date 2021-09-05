const { Router } = require('express');
const { updateContactEmail } = require('../utils/db-utils');
const router = Router();

router.get('/contacts/email/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const response = await updateContactEmail(contactId);
    
    res.status(200).json(response);
});

module.exports = router;