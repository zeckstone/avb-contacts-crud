const { MongoClient } = require("mongodb");
const { v4 } = require('uuid');
const { contactDataActions, dbConfig } = require('../config/config');

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
      const contact = await collection.find({ _id: id }).toArray();
      
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
      const response = await collection.insertOne({
          _id: v4(),
          firstName: newContact.firstName,
          lastName: newContact.lastName,
          emails: newContact.emails
      });
      
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

const deleteEmail = async (payload) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);
      const contact = await collection.find({ _id: payload.id }).toArray();

      const contactEmails = contact[0].emails;
      const emailToDeleteIndex = contactEmails.indexOf(payload.email);
      const updatedEmailList = contactEmails.splice(emailToDeleteIndex, 1);

      const response = await collection.updateOne({ _id: payload.id }, { $set: { emails: updatedEmailList } });
      
      return response;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
};

const addEmail = async (payload) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);
      const contact = await collection.find({ _id: payload.id }).toArray();

      const contactEmails = contact[0].emails;
      const updatedEmailList = contactEmails.push(payload.email);
      
      const response = await collection.updateOne({ _id: payload.id }, { $set: { emails: updatedEmailList } });
      
      return response;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
};

const updateName = async (payload) => {
    try {
      await client.connect();
  
      const db = client.db(dbConfig.dbName);
      const collection = db.collection(dbConfig.collectionName);

      let response;
      const payloadKeys = Object.keys(payload);
      const nameToUpdate = payloadKeys[1];

      await collection.updateOne({ _id: payload.id }, { $set: { [nameToUpdate]: payload[nameToUpdate] }})
        .then(res => {
          response = res;
        });

      const updatedInfo = {
        response: {acknowledged: response.acknowledged, modifiedCount: response.modifiedCount},
        updatedItem: await collection.find({ _id: payload.id }).toArray()
      };

      return updatedInfo;
    } catch (err) {
      return new Error(err.message);
    } finally {
      await client.close();
    }
};

const manipulateCollection = async (actionObject) => {
    let result;

    switch (actionObject.type) {
        case contactDataActions.DELETE_CONTACT:
            {
                result = await deleteContact(actionObject.payload.id);
                return result;
            };
        case contactDataActions.UPDATE_NAME:
            {
                result = await updateName(actionObject.payload)
                return result;
            };
        case contactDataActions.ADD_EMAIL:
            {
                result = await addEmail(actionObject.payload);
                return result;
            };
        case contactDataActions.DELETE_EMAIL:
            {
                result = await deleteEmail(actionObject.payload);
                return result;
            };
        default:
            {
                result = await getPaginatedContacts();
                return result;
            };
    };
};

module.exports = {
    createContact,
    getContact,
    getPaginatedContacts,
    manipulateCollection
};