import { ADD_HOME, DELETE_HOME, UPDATE_HOME, VIEW_HOMES, VIEW_INDI_HOME } from '../constants/homeConstants';

const initialState = {
	home: null,
	homes: [],
};

const homeReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case VIEW_INDI_HOME:
			return {
				...state,
				home: payload,
			}
		case UPDATE_HOME:
			const updated = state.homes.map((home)=>{
				if(home.id == payload.id) return payload;
				return home;
			})
			return {
				...state,
				homes: updated,
			};
		case VIEW_HOMES:
			return {
				...state,
				homes: payload,
			};
		case DELETE_HOME:
			return {
				...state,
				homes: state.homes.filter(
					(ele) => ele.id !== action.payload
				),
			};
		case ADD_HOME:
			return {
				...state,
				homes: [...state.homes, payload]
			};
		default:
			return state;
	}
}

export default homeReducer;
