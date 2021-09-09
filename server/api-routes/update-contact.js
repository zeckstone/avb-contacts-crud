const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const router = Router();

router.put('/contacts/:contactId', async (req, res) => {
    const response = await manipulateCollection({
        type: req.body.type,
        payload: {
            ...req.body,
        }
    });
    
    res.status(200).json(response);
});

module.exports = router;