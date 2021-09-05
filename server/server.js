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
app.use('/contacts/:id', require(serverURLEndPoints.getContact));
app.use('/contacts', require(serverURLEndPoints.createContact));
// app.use('/contacts/:id', require(serverURLEndPoints.deleteContact));
// app.use('/contacts/:id', require(serverURLEndPoints.updateContact));
// app.use('/contacts/email/:id', require(serverURLEndPoints.updateEmail));

app.listen(port, () => console.log(`server is listening on port ${port}`));