	const CHANGE = 'CHANGE';

let initialState = {email: "loboralex@gmail.com", pass: 'helo'}
	const loginReducer =(state = initialState, action)=>{
		switch(action.type){
		 	case CHANGE:
		 	// return {
		 	// 	...state,
		 	// 	email: action.email,
		 	// 	pass: action.password
		 	// }
		 	let stateCopy = {...state}
		 	stateCopy.email = action.email
		 	stateCopy.pass = action.pass
				return stateCopy;
			default:
				return state;
		}
	}

	export default loginReducer;

	export const changeAC = (user)=>({type: "CHANGE", email: user.email, pass: user.pass})