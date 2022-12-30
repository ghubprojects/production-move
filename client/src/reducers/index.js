import { combineReducers } from 'redux';
import accounts from './accounts';
import productParams from './productParams';
import productInfos from './productInfos';

export default combineReducers({
    accounts,
    productParams,
    productInfos,
});
