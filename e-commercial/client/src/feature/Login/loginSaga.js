
import {call, takeLatest} from "redux-saga/effects"
import { login } from "./loginSlice"
function* loginWatcher () {
    while(true) {
       const action = yield takeLatest(login.toString());
       yield call(loginWorker,action.payload);
    }
}
function* loginWorker (payload) {
    const info = yield call 
}