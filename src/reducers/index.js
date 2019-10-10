import { combineReducers } from 'redux'
import { contextReducer } from './context'
import { dimensionsReducer } from './dimensions'

export const rootReducer = combineReducers({
    context: contextReducer,
    dimensions: dimensionsReducer,
})