const { Router } = require('express');
const { v4 } = require('uuid');
const { createContact } = require('../utils/db-utils');
const router = Router();

router.get('/contacts', async (req, res) => {
    const response = await createContact({
        _id: v4(),
        firstName: 'Aria',
        lastName: 'Afriyie',
        emails: ['test@gmail.com', 'test2@gmail.com']
    });
    
    res.status(200).json(response);
});

module.exports = router;