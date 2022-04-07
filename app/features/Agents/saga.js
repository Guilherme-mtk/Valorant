import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getAgents, loadAgents, errorAgents } from './slice';

export function* getAgentsSaga() {
  try {
    const loaded = yield call(
      axios.get,
      'https://valorant-api.com/v1/agents?isPlayableCharacter=true',
    );

    yield put(loadAgents({ agents: loaded.data.data }));
  } catch (err) {
    yield put(errorAgents({ error: err }));
  }
}

export default function* defaultSaga() {
  yield takeLatest(getAgents.type, getAgentsSaga);
}
