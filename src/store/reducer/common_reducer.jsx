const LOGIN = 'LOGIN';

let initialState = {redirect: false}
	const commonReducer =(state = initialState, action)=>{
		switch(action.type){
			case LOGIN:
			return {
				...state,
				redirect: action.redirect
			}

		 	// 	state.redirect = true
				// return state;
		 	// case LOGOUT:
		 	// // let stateCopy = {...state}
		 	// // console.log(stateCopy.redirect)
		 	// 	state.redirect = action.redirect
				// return state;
			default:
				return state;
		}
	}

export default commonReducer;

export const loginAC = (redirect)=>({type: LOGIN, redirect: redirect})