const { dbConfig } = require('../config/config');

const { MongoClient } = require("mongodb");

const client = new MongoClient(dbConfig.uri);

const getPaginatedContacts = async () => {
  try {
    await client.connect();

    const db = client.db(dbConfig.dbName);
    const collection = db.collection(dbConfig.collectionName);
    const contacts = await collection.find({}).toArray();
    
    return contacts;
  } catch (err) {
    return new Error(err.message);
  } finally {
    await client.close();
  }
};

const getContact = async (id) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);
      const contact = await collection.find({ id: id }).toArray();
        
      return contact;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
  };

const createContact = async (newContact) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);
      const response = await collection.insertOne(newContact);
      
      return response;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
};

const deleteContact = async (id) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);
      const response = await collection.deleteOne({ _id: id });
      
      return response;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
};

module.exports = {
    createContact,
    getContact,
    getPaginatedContacts
};