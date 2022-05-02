import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { loadDetails, errorDetails, getDetails } from './slice';

export function* getDetailsSaga() {
  try {
    const loaded = yield call(
      axios.get,
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true',
    );

    yield put(loadDetails({ agents: loaded.data.data }));
  } catch (err) {
    yield put(errorDetails({ error: err }));
  }
}

export default function* defaultSaga() {
  yield takeLatest(getDetails.type, getDetails);
}
