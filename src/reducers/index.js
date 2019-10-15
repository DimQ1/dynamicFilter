import { combineReducers } from 'redux';
import { contextReducer } from './context';
import { dimensionsReducer } from './dimensions';
import { searchItemsReducer } from './searchItems';
import { extFilterReducer } from './extFilter';
import { extOrderReducer } from './extOrder'

export const rootReducer = combineReducers({
    context: contextReducer,
    dimensions: dimensionsReducer,
    searchItems: searchItemsReducer,
    extFilter:extFilterReducer,
    extOrder: extOrderReducer
})