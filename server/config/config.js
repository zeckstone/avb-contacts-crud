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
    updateEmail: './api-routes/update-email'
};

const contactDataActions = {
    GET_ALL_CONTACTS: 'GET_ALL_CONTACTS',
    GET_CONTACT: 'GET_CONTACT',
    CREATE_CONTACT: 'CREATE_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_NAME: 'UPDATE_NAME'
}

module.exports = {
    contactDataActions,
    dbConfig,
    serverURLEndPoints
};