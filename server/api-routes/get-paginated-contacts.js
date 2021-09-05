const { Router } = require('express');
const { getPaginatedContacts } = require('../utils/db-utils');

const router = Router();

router.get('/', async (req, res) => {
    const response = await getPaginatedContacts();
    res.status(200).json(response);
});

module.exports = router;