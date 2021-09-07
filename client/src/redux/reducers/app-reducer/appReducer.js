import { actionTypes } from "../../actions/types/types";
// import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const INITIAL_STATE = {
    contacts: null,
    selectedContact: null,
    showEmailInput: false,
};

const appReducer = async (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_EMAIL:
            return {
                ...state,
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
            
            //    const response = await ('http://localhost:5000/contacts/paginated')
            //         .then(res => res.data);

            //         console.log('result from appReducer:', response)

                return {
                    ...state,
                    contacts: []
                };
            
        case actionTypes.GET_CONTACT:
            return {
                ...state,
            };
        case actionTypes.SELECT_CONTACT:
            return {
                ...state,
            };
        case actionTypes.UPDATE_NAME:
            return {
                ...state,
            }
        default:
            return state;
    };
};

export default appReducer;