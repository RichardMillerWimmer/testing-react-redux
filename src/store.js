import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux';
import { postReducer } from './redux/postReducer';


export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStoreWithMiddleware(postReducer);

 export default store;