import { actionTypes } from "../types/types";

export const getAllContacts = (contacts) => (
    {
        type: actionTypes.GET_ALL_CONTACTS,
        payload: contacts
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

export const setEmail = (emailObject) => (
    {
        type: actionTypes.SET_EMAIL,
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

export const fetchContacts = () => (
    {
        type: actionTypes.FETCH_ALL_CONTACTS,
    }
);

export const setFirstName = (firstName) => (
    {
        type: actionTypes.SET_FIRST_NAME,
        payload: firstName
    }
);

export const setLastName = (lastName) => (
    {
        type: actionTypes.SET_LAST_NAME,
        payload: lastName
    }
);

export const toggleEmailInput = () => (
    {
        type: actionTypes.SHOW_EMAIL_INPUT,
    }
);

export const clearNewEmailInput = () => (
    {
        type: actionTypes.CLEAR_NEW_EMAIL_INPUT,
    }
);

export const resetForm = () => (
    {
        type: actionTypes.RESET_FORM
    }
);

export const updateAppContacts = () => (
    {
        type: actionTypes.UPDATE_APP_CONTACTS
    }
);

export const getInitialState = () => (
    {
        type: actionTypes.GET_INITIAL_STATE
    }
);