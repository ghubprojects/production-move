import {
    CREATE_PRODUCT_INFOS,
    RETRIEVE_PRODUCT_INFOS,
    RETRIEVE_ALL_PRODUCT_INFOS,
    UPDATE_PRODUCT_INFOS,
    DELETE_PRODUCT_INFOS,
    DELETE_ALL_PRODUCT_INFOS,
} from './types';

import ProductInfosDataService from '~/services/productInfosDataService';

export const createPRODUCT_InfoS =
    ({ productCode, productName, leadTime, warrantyTime, error, brand, imageProduct }) =>
    async (dispatch) => {
        try {
            console.log(6, 'createPRODUCT_InfoS');
            const res = await ProductInfosDataService.create({
                productCode,
                productName,
                leadTime,
                warrantyTime,
                error,
                brand,
                imageProduct,
            });
            console.log('Create result:', res);
            dispatch({
                type: CREATE_PRODUCT_INFOS,
                payload: res,
            });
        } catch (err) {
            console.log(err);
        }
    };

export const retrieveProductInfos =
    ({ productCode, productName, leadTime, warrantyTime, error, brand, imageProduct }) =>
    async (dispatch) => {
        try {
            console.log(3, 'retrievePRODUCT_InfoSs');
            const res = await ProductInfosDataService.findAll({
                productCode,
                productName,
                leadTime,
                warrantyTime,
                error,
                brand,
                imageProduct,
            });
            console.log('Retrieve result:', res);
            dispatch({
                type: RETRIEVE_PRODUCT_INFOS,
                payload: res,
            });
            return Promise.resolve(res);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const retrieveAllProductInfos = () => async (dispatch) => {
    try {
        const res = await ProductInfosDataService.findAll({});
        dispatch({
            type: RETRIEVE_ALL_PRODUCT_INFOS,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateProductInfos =
    (id, { productCode, productName, leadTime, warrantyTime, error, brand, imageProduct }) =>
    async (dispatch) => {
        try {
            const res = await ProductInfosDataService.update(id, {
                productCode,
                productName,
                leadTime,
                warrantyTime,
                error,
                brand,
                imageProduct,
            });

            dispatch({
                type: UPDATE_PRODUCT_INFOS,
                payload: res.data,
            });

            return Promise.resolve(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

export const deleteProductInfos = (id) => async (dispatch) => {
    try {
        await ProductInfosDataService.delete(id);

        dispatch({
            type: DELETE_PRODUCT_INFOS,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllProductInfos = () => async (dispatch) => {
    try {
        const res = await ProductInfosDataService.deleteAll();

        dispatch({
            type: DELETE_ALL_PRODUCT_INFOS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};
