import { actionTypes } from "../../actions/types/types";
import dotenv from 'dotenv';
dotenv.config();

const INITIAL_STATE = {
    contacts: null,
    selectedContact: null,
    showEmailInput: false,
    toggleSelection: false,
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    hasNewEmail: false,
    selectedContactEmails: null,
    isSelectedContact: false,
    updateAppContacts: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_STATE:
            return {
                ...state,
                ...INITIAL_STATE,
            };
        case actionTypes.CREATE_CONTACT:
            return {
                ...state,
            };
        case actionTypes.DELETE_CONTACT:
            return {
                ...state,
            };
        case actionTypes.DELETE_EMAIL:
            return {
                ...state,
            };
        case actionTypes.GET_ALL_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case actionTypes.GET_CONTACT:
            return {
                ...state,
            };
        case actionTypes.SET_EMAIL:
            return {
                ...state,
                emailInput: action.payload,
                hasNewEmail: true
            };
        case actionTypes.SELECT_CONTACT:
            return {
                ...state,
                selectedContact: action.payload,
                firstNameInput: action.payload.firstName,
                lastNameInput: action.payload.lastName,
                selectedContactEmails: action.payload.emails,
                isSelectedContact: true
            };
        case actionTypes.UPDATE_NAME:
            return {
                ...state,
            };
        case actionTypes.SET_FIRST_NAME:
            return {
                ...state,
                firstNameInput: action.payload,
            };
        case actionTypes.SET_LAST_NAME:
            return {
                ...state,
                lastNameInput: action.payload,
            };
        case actionTypes.SHOW_EMAIL_INPUT:
            return {
                ...state,
                showEmailInput: !state.showEmailInput,
                emailInput: !state.showEmailInput && ''
            };
        case actionTypes.CLEAR_NEW_EMAIL_INPUT:
            return {
                ...state,
                emailInput: ''
            };
        case actionTypes.RESET_FORM:
        return {
            ...state,
            selectedContact: null,
            showEmailInput: false,
            toggleSelection: false,
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            selectedContactEmails: null,
            isSelectedContact: false,
            hasNewEmail: false
        };
        case actionTypes.FETCH_ALL_CONTACTS:
            return {
                ...state,
            };
        case actionTypes.UPDATE_APP_CONTACTS:
            return {
                ...state,
                updateAppContacts: !state.updateAppContacts
            };
        default:
            return state;
    };
};

export default appReducer;