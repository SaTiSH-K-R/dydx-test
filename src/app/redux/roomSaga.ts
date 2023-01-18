import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { setRoomsInfo } from './roomSlice'

function* roomWatcherSaga() {
  yield takeEvery('rooms/getRoomsInfo', roomWorkerSaga)
}

function* roomWorkerSaga(): any {
  const data = yield call(() => axios({
    method: 'get',
    url: "https://destifyfunc-api-dev.azurewebsites.net/api/Rooms?roomIds=ceae0d77-2fd6-dbe3-0f33-61c355c106ff,4c0ad727-1652-3b6e-4adb-61c21a17a4b1",
    responseType: 'json',
    headers: {
      "x-functions-key": process.env.REACT_APP_API_AUTHENTICATION_KEY
    }
  }))
  yield put(setRoomsInfo(data.data.roomInfo))
}

export default roomWatcherSaga