import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialState = JSON.parse(localStorage.getItem('contacts'))
    ?? []
    ;
const itemsReducer = createReducer(initialState, {
    [actions.addContact]: (state, { payload }) => {
        if (state.filter(e => e.name === payload.name).length === 0) {
          localStorage.setItem("contacts", JSON.stringify([...state, payload]));
          return [...state, payload];
        }
        alert(`${payload.name} уже существует в контактах!`);
        return state;
    },
    [actions.deleteContact]: (state, {payload})=> {
        const contacts = state.filter(contact => contact.id !== payload);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        return contacts;
    }
    
});

const filterReducer = createReducer('', {
    [actions.filter]: (state, { payload }) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});
