const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const router = Router();

router.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const { contactInfo } = req.body;

    const response = await manipulateCollection({
        type: contactInfo.type,
        payload: {
            contactInfo,
            contactId
        }
    });
    
    res.status(200).json(response);
});

module.exports = router;