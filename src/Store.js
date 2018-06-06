import { Platform } from 'react-native';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import RootReducer from './Reducers';
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);

export default Store;
