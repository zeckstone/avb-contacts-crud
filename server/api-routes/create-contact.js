const { Router } = require('express');
const { v4 } = require('uuid');
const { createContact } = require('../utils/db-utils');
const router = Router();

router.get('/', async (req, res) => {
    const response = await createContact({
        id: v4(),
        firstName: 'Selasi',
        lastName: 'Afriyie',
        emails: ['test@gmail.com', 'test2@gmail.com']
    });
    
    res.status(200).json(response);
});

module.exports = router;