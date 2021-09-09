const dbConfig = {
    uri: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME,
    collectionName: process.env.COLLECTION_NAME
}

const serverURLEndPoints = {
    paginatedContacts: './api-routes/get-paginated-contacts',
    createContact: './api-routes/create-contact',
    deleteContact: './api-routes/delete-contact',
    getContact: './api-routes/get-contact',
    updateContact: './api-routes/update-contact',
};

const contactDataActions = {
    GET_ALL_CONTACTS: 'GET_ALL_CONTACTS',
    GET_CONTACT: 'GET_CONTACT',
    CREATE_CONTACT: 'CREATE_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    DELETE_EMAIL: 'DELETE_EMAIL',
    ADD_EMAIL: 'ADD_EMAIL',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_CONTACT: 'UPDATE_CONTACT'
}

module.exports = {
    contactDataActions,
    dbConfig,
    serverURLEndPoints
};