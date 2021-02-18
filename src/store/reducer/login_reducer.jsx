	const CHANGE = 'CHANGE';

let initialState = {userId: null, email: null, login: null}
	const loginReducer =(state = initialState, action)=>{
		switch(action.type){
		 	case CHANGE:
		 	// return {
		 	// 	...state,
		 	// 	email: action.email,
		 	// 	pass: action.password
		 	// }
		 	let stateCopy = {...state}
		 	stateCopy.userId = action.userId
		 	stateCopy.email = action.email
		 	stateCopy.login = action.pass
				return stateCopy;
			default:
				return state;
		}
	}

	export default loginReducer;

	export const changeAC = (user)=>({type: "CHANGE", userId: user.userId,email: user.email, pass: user.pass})