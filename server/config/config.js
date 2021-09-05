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

module.exports = {
    dbConfig,
    serverURLEndPoints
};