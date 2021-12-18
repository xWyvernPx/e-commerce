import { fork, put, take,call } from "redux-saga/effects";
import CategoryAPI from "../../api/CategoryAPI";
import { fetchCateInfo, fetchCateInfoSuccess } from "./productPageSlice";
import SubcategoryAPI from "../../api/SubcategoryAPI"
export default function* ProductPageSaga () {
    yield fork(fetchCateInfoWatcher);
}
function* fetchCateInfoWatcher () {
    const action = yield take(fetchCateInfo.toString());
    yield fork(fetchCateInfoWorker,action.payload);
}
function* fetchCateInfoWorker (payload)  {
   
    const cate = yield call(CategoryAPI.getBySlug , payload.cateslug)
    const subcate = yield call(SubcategoryAPI.getBySlug, payload.subslug)
    // yield console.log(subcate);
    yield put(fetchCateInfoSuccess({category : cate , subcategory : subcate} ));
}