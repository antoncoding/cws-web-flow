import * as types from '../actions/types';
// import { CommonActions } from '../actions/commonActions';

const initialState = {
	modalContent: {
		logo: '',
		title: '',
		message: '',
		transport: null
	},
	showModal: false
};

const commonReducer = (state = initialState, action) => {
	// console.log('commonReducer action.type = ', action.type);
	// console.log('commonReducer action.payload = ', action.payload);
	switch (action.type) {
		case types.OPEN_MODAL:
			return {
				...state,
				modalContent: action.payload,
				showModal: true
			};
		case types.CLOSE_MODAL:
			return {
				...state,
				showModal: false
			};
		case types.NAVIGATE_TO_REIGSTER2:
			return {
				...state,
				transport: action.payload
			};
		default:
			return state;
	}
};

export default commonReducer;
