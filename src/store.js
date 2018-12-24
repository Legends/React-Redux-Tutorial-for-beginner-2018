import {createStore} from 'redux'
import {combineReducers} from 'redux'
import CountReducer from './reducers/CountReducer'

const combinedReducers = combineReducers({
    CountReducer
});

const initialStoreState = {
    CountReducer: {count: 123, wish_value: 12}
};

let store = createStore(combinedReducers, initialStoreState);

export default store;
