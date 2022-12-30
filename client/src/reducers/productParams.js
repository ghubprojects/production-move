import {
    CREATE_PRODUCT_PARAMS,
    RETRIEVE_PRODUCT_PARAMS,
    RETRIEVE_ALL_PRODUCT_PARAMS,
    UPDATE_PRODUCT_PARAMS,
    DELETE_PRODUCT_PARAMS,
    DELETE_ALL_PRODUCT_PARAMS,
} from '~/actions/types';

const initialState = [];

function productParamsReducer(productParams = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUCT_PARAMS:
            return [...productParams, payload];

        case RETRIEVE_PRODUCT_PARAMS:
            return payload;

        case RETRIEVE_ALL_PRODUCT_PARAMS:
            return payload;

        case UPDATE_PRODUCT_PARAMS:
            return productParams.map((productParam) => {
                if (productParam.id === payload.id) {
                    return {
                        ...productParam,
                        ...payload,
                    };
                } else {
                    return productParam;
                }
            });

        case DELETE_PRODUCT_PARAMS:
            return productParams.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_PRODUCT_PARAMS:
            return [];

        default:
            return productParams;
    }
}

export default productParamsReducer;
