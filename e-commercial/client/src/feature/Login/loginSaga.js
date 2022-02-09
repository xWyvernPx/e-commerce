
import {call, takeLatest,take, fork, put} from "redux-saga/effects"
import loginAPI from "../../api/loginAPI";
import { login, loginFailed, loginSuccessful } from "./loginSlice"
import { useNavigate } from "react-router-dom";
import { history, history2 } from "../../utils/history";
export default function* LoginSaga() {
    yield fork(loginWatcher);
}
function* loginWatcher () {
       const action = yield take(login.toString());
       yield call(loginWorker,action.payload);
}
function* loginWorker (payload) {
    yield console.log("oke worker");
    const info = yield call(loginAPI.login,localStorage.getItem("token"),payload);
    yield put(loginSuccessful(info.user))
    yield  history.back();
}