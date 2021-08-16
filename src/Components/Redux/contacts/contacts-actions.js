import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('ADD_CONTACT', prepare => {
    return {
        payload: {
            id: `id-${shortid.generate()}`,
            name: prepare.name,
            number: prepare.number
        },
    };
});
export const deleteContact = createAction('DELETE_CONTACT');
export const filter = createAction('FILTER');