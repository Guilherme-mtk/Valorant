import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getMaps, loadMaps, errorMaps } from './slice';

export function* getMapsSaga() {
  try {
    const loaded = yield call(axios.get, 'https://valorant-api.com/v1/maps');
    // console.log(loaded);
    yield put(loadMaps({ maps: loaded.data.data }));
  } catch (err) {
    yield put(errorMaps({ error: err }));
  }
}

export default function* defaultSaga() {
  yield takeLatest(getMaps.type, getMapsSaga);
}
