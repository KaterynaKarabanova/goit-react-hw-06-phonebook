import { initialState } from './reducers';
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers'; // Import your rootReducer
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancer);

export default store;
