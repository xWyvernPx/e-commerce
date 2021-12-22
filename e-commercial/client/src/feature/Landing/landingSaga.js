import { call, debounce, fork, put, select, take } from "redux-saga/effects";
import CategoryAPI from "../../api/CategoryAPI";
import { getData, loadList, loadListSuccess, loadRandom, loadRandomFinish } from "./landingSlice";
function* landingSaga() {
    yield fork(categoryFetchWatcher);
    yield fork(randomCateWatcher);
}
function* categoryFetchWatcher() {
    while (true) {
        // yield takeLatest(loadList.type, categoryFetch);
        yield take(loadList.type)
        yield call(categoryFetch);
        
    }
}
function* categoryFetch(){
        
        const categoryList = yield  call(CategoryAPI.getAll);
        yield put(loadListSuccess(categoryList));
 
    
}
function* randomCateWatcher () {
   
       yield debounce(500,loadRandom.toString(),randomCateWorker);
    
}
function randomList(data) {
 
    const list = [];
    
        while (list.length < 5) {
          const item = data[Math.floor(Math.random()*data.length)]
          if(!list.includes(item)) list.push(item);
        }
    return list;
}
function* randomCateWorker () {
    // yield console.log("random worker");
    const data = yield select(getData);
    const list = data.data;
    const random = yield call(randomList,list);
    yield put(loadRandomFinish(random));
}
export default landingSaga;