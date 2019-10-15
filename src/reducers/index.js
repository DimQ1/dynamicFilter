import { combineReducers } from 'redux'
import { contextReducer } from './context'
import { dimensionsReducer } from './dimensions'
import { searchItemsReducer } from './searchItems'

export const rootReducer = combineReducers({
    context: contextReducer,
    dimensions: dimensionsReducer,
    searchItems: searchItemsReducer
})