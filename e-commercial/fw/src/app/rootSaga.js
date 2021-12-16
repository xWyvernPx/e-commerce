import {fork, takeEvery} from "redux-saga/effects"
import landingSaga from "../feature/Landing/landingSaga";
function* RootSaga () {
    yield fork(landingSaga);
}
export default RootSaga;