import { REQUEST_HISTORY_SUCCESS, REQUEST_HISTORY_FAILED } from '../constants';

function requestHistorySuccess(val){
	return {
		type: 		REQUEST_HISTORY_SUCCESS,
		payload: 	val
	}
}

function requestHistoryFailed(){
	return {
		type: 		REQUEST_HISTORY_FAILED
	}
}

export { requestHistoryFailed, requestHistorySuccess };