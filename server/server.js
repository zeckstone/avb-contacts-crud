const express = require('express');
require('dotenv').config();
const { serverURLEndPoints } = require('./config/config');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('WELCOME TO AVB CONTACT CRUD SERVER');
});

app.use('/contacts/paginated', require(serverURLEndPoints.paginatedContacts));
app.use('/', require(serverURLEndPoints.getContact));
app.use('/', require(serverURLEndPoints.createContact));
app.use('/', require(serverURLEndPoints.deleteContact));
app.use('/', require(serverURLEndPoints.updateContact));

app.listen(port, () => console.log(`server is listening on port ${port}`));