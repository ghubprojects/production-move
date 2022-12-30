import {
    CREATE_PRODUCT_INFOS,
    RETRIEVE_PRODUCT_INFOS,
    RETRIEVE_ALL_PRODUCT_INFOS,
    UPDATE_PRODUCT_INFOS,
    DELETE_PRODUCT_INFOS,
    DELETE_ALL_PRODUCT_INFOS,
} from '~/actions/types';

const initialState = [];

function productInfosReducer(productInfos = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUCT_INFOS:
            return [...productInfos, payload];

        case RETRIEVE_PRODUCT_INFOS:
            return payload;

        case RETRIEVE_ALL_PRODUCT_INFOS:
            return payload;

        case UPDATE_PRODUCT_INFOS:
            return productInfos.map((productInfo) => {
                if (productInfo.id === payload.id) {
                    return {
                        ...productInfo,
                        ...payload,
                    };
                } else {
                    return productInfo;
                }
            });

        case DELETE_PRODUCT_INFOS:
            return productInfos.filter(({ id }) => id !== payload.id);

        case DELETE_ALL_PRODUCT_INFOS:
            return [];

        default:
            return productInfos;
    }
}

export default productInfosReducer;
