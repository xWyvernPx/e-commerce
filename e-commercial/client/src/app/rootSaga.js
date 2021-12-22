import { fork } from "redux-saga/effects";
import landingSaga from "../feature/Landing/landingSaga";
import ProductPageSaga from "../feature/ProductPage/productPageSaga";
function* RootSaga () {
    yield fork(landingSaga);
    yield fork(ProductPageSaga);
}
export default RootSaga;