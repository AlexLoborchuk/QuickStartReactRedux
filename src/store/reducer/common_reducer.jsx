const LOGIN = 'LOGIN';
const LOADING_DATA = 'LOADING-DATA';

let initialState = {redirect: false, isfetching: true}
	const commonReducer =(state = initialState, action)=>{
		switch(action.type){
			case LOGIN:
			return {...state, redirect: action.redirect }
			case LOADING_DATA: 
				return {...state, isfetching: action.isfetching}
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
export const LoadingAC = (fetching)=>({type: LOADING_DATA, isfetching: fetching})