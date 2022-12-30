import {
    CREATE_PRODUCT_PARAMS,
    RETRIEVE_PRODUCT_PARAMS,
    RETRIEVE_ALL_PRODUCT_PARAMS,
    UPDATE_PRODUCT_PARAMS,
    DELETE_PRODUCT_PARAMS,
    DELETE_ALL_PRODUCT_PARAMS,
} from './types';

import ProductParamsDataService from '~/services/productParamsDataService';

export const createPRODUCT_PARAMS =
    ({ productCode, productName, screen, CPU, VGA, RAM, SSD, weight }) =>
    async (dispatch) => {
        try {
            console.log(6, 'createPRODUCT_PARAMS');
            const res = await ProductParamsDataService.create({
                productCode,
                productName,
                screen,
                CPU,
                VGA,
                RAM,
                SSD,
                weight,
            });
            console.log('Create result:', res);
            dispatch({
                type: CREATE_PRODUCT_PARAMS,
                payload: res,
            });
        } catch (err) {
            console.log(err);
        }
    };

export const retrieveProductParams =
    ({ productCode, productName, screen, CPU, VGA, RAM, SSD, weight }) =>
    async (dispatch) => {
        try {
            console.log(3, 'retrievePRODUCT_PARAMSs');
            const res = await ProductParamsDataService.findAll({
                productCode,
                productName,
                screen,
                CPU,
                VGA,
                RAM,
                SSD,
                weight,
            });
            console.log('Retrieve result:', res);
            dispatch({
                type: RETRIEVE_PRODUCT_PARAMS,
                payload: res,
            });
            return Promise.resolve(res);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const retrieveAllProductParams = () => async (dispatch) => {
    try {
        const res = await ProductParamsDataService.findAll({});
        dispatch({
            type: RETRIEVE_ALL_PRODUCT_PARAMS,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateProductParams =
    (id, { productCode, productName, screen, CPU, VGA, RAM, SSD, weight }) =>
    async (dispatch) => {
        try {
            const res = await ProductParamsDataService.update(id, {
                productCode,
                productName,
                screen,
                CPU,
                VGA,
                RAM,
                SSD,
                weight,
            });

            dispatch({
                type: UPDATE_PRODUCT_PARAMS,
                payload: res.data,
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const deleteProductParams = (id) => async (dispatch) => {
    try {
        await ProductParamsDataService.delete(id);

        dispatch({
            type: DELETE_PRODUCT_PARAMS,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllProductParams = () => async (dispatch) => {
    try {
        const res = await ProductParamsDataService.deleteAll();

        dispatch({
            type: DELETE_ALL_PRODUCT_PARAMS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
