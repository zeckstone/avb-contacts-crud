const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const router = Router();

router.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;

    const response = await manipulateCollection({
        type: 'UPDATE_NAME',
        payload: {
            id: contactId,
            firstName: 'Nyamekye'
        }
    });
    
    res.status(200).json(response);
});

module.exports = router;