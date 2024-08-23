import { ADD_LAND, UPDATE_LAND, VIEW_LANDS, VIEW_INDI_LAND, DELETE_LAND } from '../constants/landConstants';

const initialState = {
	land: null,
	lands: [],
};

const landReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case VIEW_INDI_LAND:
			return {
				...state,
				land: payload,
			}
		case UPDATE_LAND:
			const updated = state.lands.map((land)=>{
				if(land.id == payload.id) return payload;
				return land;
			})
			return {
				...state,
				lands: updated,
			};
		case VIEW_LANDS:
			return {
				...state,
				lands: payload,
			};
		case DELETE_LAND:
			return {
				...state,
				lands: state.lands.filter(
					(ele) => ele.id !== action.payload
				),
			};
		case ADD_LAND:
			return {
				...state,
				lands: [...state.lands, payload]
			};
		default:
			return state;
	}
}

export default landReducer;
