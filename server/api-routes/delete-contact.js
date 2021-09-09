const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const router = Router();

router.delete('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const response = await manipulateCollection({
        type: 'DELETE_CONTACT',
        payload: {
            contactId,
        }
    });
    
    res.status(200).json(response);
});

module.exports = router;