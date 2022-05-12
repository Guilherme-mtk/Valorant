import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getWeapons, loadWeapons, errorWeapons } from './slice';

export function* getWeaponsSaga() {
  try {
    const loaded = yield call(axios.get, 'https://valorant-api.com/v1/weapons');
    yield put(loadWeapons({ weapons: loaded.data.data }));
  } catch (err) {
    yield put(errorWeapons({ error: err }));
  }
}

export default function* defaultSaga() {
  yield takeLatest(getWeapons.type, getWeaponsSaga);
}
