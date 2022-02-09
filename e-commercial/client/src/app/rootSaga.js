import { fork } from "redux-saga/effects";
import landingSaga from "../feature/Landing/landingSaga";
import LoginSaga from "../feature/Login/loginSaga";
import ProductPageSaga from "../feature/ProductPage/productPageSaga";
function* RootSaga () {
    yield fork(landingSaga);
    yield fork(ProductPageSaga);
    yield fork (LoginSaga);
}
export default RootSaga;