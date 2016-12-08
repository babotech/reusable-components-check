import {
  INPUT_VALIDATION_REQUESTED,
  INPUT_VALIDATION_SUCCEEDED,
  INPUT_VALIDATION_FAILED
} from './action_types'

import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'


const Api = {
  validate() {
    const options = [true, false]

    return options[Math.floor(Math.random() * 2)]
  }
}


function* validateInput(action) {
   try {
      const { id, side } = action.payload
      const isValid = yield call(Api.validate)
      yield put({type: INPUT_VALIDATION_SUCCEEDED, side, payload: { id, isValid }})
   } catch (e) {
      yield put({type: INPUT_VALIDATION_FAILED, message: e.message})
   }
}


function* textInputSaga() {
  yield takeEvery(INPUT_VALIDATION_REQUESTED, validateInput)
}


export default textInputSaga
