import { call, fork, put, take } from "redux-saga/effects";
import cartAPI from "../../api/cartAPI";
import {
  loadCart,
  loadCartFailure,
  loadCartSuccess,
  updateCart,
  updateCartFailure,
  updateCartSuccess,
} from "./cartSlice";
export default function* CartSaga() {
  yield fork(CartWatcher);
}
function* CartWatcher() {
  const action = yield take(loadCart.toString());
  yield call(CartWorker, action.payload);
}
function* CartWorker(payload) {
  if (payload) {
    const data = yield call(cartAPI.getCartByAccount, payload);
    if (data) yield put(loadCartSuccess(data));
  } else yield put(loadCartFailure);
}
function* UpdateCartWatcher() {
  const action = yield take(updateCart.toString());
  yield call;
}
function* UpdateCartWorker(payload) {
  const { cartId, amount } = payload;
  const data = yield call(cartAPI.updateCartWithAmount(cartId, amount));
  if (data === 1) yield put(updateCartSuccess);
  else yield put(updateCartFailure);
}
