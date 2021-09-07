import { actionTypes } from "../types/types";

export const getAllContacts = () => (
    {
        type: actionTypes.GET_ALL_CONTACTS,
    }
);

export const getContact = (id) => (
    {
        type: actionTypes.GET_CONTACT,
        payload: {
            id: id
        }
    }
);

export const createContact = (newUser) => (
    {
        type: actionTypes.CREATE_CONTACT,
        payload: newUser
    }
);

export const deleteContact = (id) => (
    {
        type: actionTypes.DELETE_CONTACT,
        payload: {
            id: id
        }
    }
);

export const deleteEmail = (emailObject) => (
    {
        type: actionTypes.DELETE_EMAIL,
        payload: emailObject
    }
);

export const addEmail = (emailObject) => (
    {
        type: actionTypes.ADD_EMAIL,
        payload: emailObject
    }
);

export const updateName = (nameObject) => (
    {
        type: actionTypes.UPDATE_NAME,
        payload: nameObject
    }
);

export const selectContact = (contactObject) => (
    {
        type: actionTypes.SELECT_CONTACT,
        payload: contactObject
    }
);