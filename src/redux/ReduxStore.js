import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './reducers/phoneBookReducer';



const reducers = combineReducers({
    phoneBookPage: phoneBookReducer,
});
const store = createStore(reducers, composeWithDevTools());


window.store = store;

export default store;
