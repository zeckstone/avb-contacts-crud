const { Router } = require('express');
const { manipulateCollection } = require('../utils/db-utils');
const { contactDataActions } = require('../config/config')

const router = Router();

router.get('/', async (req, res) => {
    const response = await manipulateCollection({
        type: contactDataActions.GET_ALL_CONTACTS
    });
    
    res.status(200).json(response);
});

module.exports = router;