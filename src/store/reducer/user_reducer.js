  const ADDUSER = 'ADD-USER';
  const SETSTATE = 'SET-STATE'

  let initialState = {users: []}
 const profileReducer =(state = initialState, action)=>{
 	switch(action.type){
		 	case ADDUSER: 	
		 	let stateCopy = [...state];
			stateCopy.push(action.user)
				return stateCopy;
			case SETSTATE:
			return {...state, users: [...action.users]};
			default:
				return state;
		}
 }

 export default profileReducer;

 export const UserAddAC = (user)=>({type: ADDUSER, user: user});
 export const SetUsersAC = (users)=>({type: SETSTATE, users: users});