import {configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import RootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        rootReducer
    },
    middleware : [sagaMiddleware],
});
sagaMiddleware.run(RootSaga);
export default store;
