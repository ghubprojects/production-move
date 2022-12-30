import {
    CREATE_ACCOUNT,
    RETRIEVE_ACCOUNTS,
    RETRIEVE_ALL_ACCOUNTS,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT,
    DELETE_ALL_ACCOUNTS,
} from './types';

import AccountDataService from '~/services/accountService';

export const createAccount =
    ({ fullname, role, email, password, address }) =>
    async (dispatch) => {
        try {
            console.log(6, 'createAccount');
            const res = await AccountDataService.create({
                fullname,
                role,
                email,
                password,
                address,
            });
            console.log('Create result:', res);
            dispatch({
                type: CREATE_ACCOUNT,
                payload: res,
            });
        } catch (err) {
            console.log(err);
        }
    };

export const retrieveAccounts =
    ({ fullname, role, email, password, address }) =>
    async (dispatch) => {
        try {
            console.log(3, 'retrieveAccounts');
            const res = await AccountDataService.findAll({
                fullname,
                role,
                email,
                password,
                address,
            });
            console.log('Retrieve result:', res);
            dispatch({
                type: RETRIEVE_ACCOUNTS,
                payload: res,
            });
            return Promise.resolve(res);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const retrieveAllAccounts = () => async (dispatch) => {
    try {
        const res = await AccountDataService.findAll({});
        dispatch({
            type: RETRIEVE_ALL_ACCOUNTS,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateAccount =
    (id, { fullname, role, email, password, address }) =>
    async (dispatch) => {
        try {
            const res = await AccountDataService.update(id, {
                fullname,
                role,
                email,
                password,
                address,
            });

            dispatch({
                type: UPDATE_ACCOUNT,
                payload: res.data,
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const deleteAccount = (id) => async (dispatch) => {
    try {
        await AccountDataService.delete(id);

        dispatch({
            type: DELETE_ACCOUNT,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllAccounts = () => async (dispatch) => {
    try {
        const res = await AccountDataService.deleteAll();

        dispatch({
            type: DELETE_ALL_ACCOUNTS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
