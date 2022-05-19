import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getAgentsDetails,
  loadAgentsDetails,
  errorAgentsDetails,
} from './slice';

export function* getAgentsDetailsSaga() {
  try {
    const loaded = yield call(
      axios.get,
      'https://valorant-api.com/v1/agents/{uuid}',
    );
    console.log(loaded);
    yield put(loadAgentsDetails({ agentsdetails: loaded.data.data }));
  } catch (err) {
    yield put(errorAgentsDetails({ error: err }));
  }
}

export default function* defaultSaga() {
  yield takeLatest(getAgentsDetails.type, getAgentsDetailsSaga);
}
