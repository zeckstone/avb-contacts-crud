const express = require('express');
require('dotenv').config();
const { serverURLEndPoints } = require('./config/config');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('WELCOME TO AVB CONTACT CRUD SERVER');
});

app.use('/contacts/paginated', cors(corsOptions), require(serverURLEndPoints.paginatedContacts));
app.use('/', cors(corsOptions), require(serverURLEndPoints.getContact));
app.use('/', cors(corsOptions), require(serverURLEndPoints.createContact));
app.use('/', cors(corsOptions), require(serverURLEndPoints.deleteContact));
app.use('/', cors(corsOptions), require(serverURLEndPoints.updateContact));

app.listen(port, () => console.log(`server is listening on port ${port}`));