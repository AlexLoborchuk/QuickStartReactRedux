  import {userApi} from '../../API/api';
  import {LoadingAC} from './common_reducer';

  //const ADDUSER = 'ADD-USER';
  const SETSTATE = 'SET-STATE';
  const TOTALCOUNT = 'TOTAL-COUNT';
  const CURRENTPAGE = "CURRENT-PAGE";
  const FOLLOWED = "FOLLOWED";
  const UNFOLLOWED = "UNFOLLOWED";

  let initialState = {users: [], totalCount: 0, pageSize: 15, currentPage: 1, followed: false}
 const userReducer =(state = initialState, action)=>{
 		let stateCopy = null;
 	switch(action.type){
		 // 	case ADDUSER: 	
		 // 	  stateCopy = [...state];
			// stateCopy.push(action.user)
			// 	return stateCopy;
			case SETSTATE:
			return {...state, users: [...action.users]};
			case TOTALCOUNT:
				return {...state, totalCount: action.number};
			case CURRENTPAGE:
				return {...state, currentPage: action.currentPage};
			case FOLLOWED:
				return {...state, users: state.users.map(user =>{
					if(user.id === action.userId){
						return {...user, followed: true}
					}
					return user
				})
			}
			case UNFOLLOWED:
				return {...state, users: state.users.map(user =>{
					if(user.id === action.userId){
						return {...user, followed: false}
					}
					return user
				})
			}
			default:
				return state;
		}
 }


 //export const UserAddAC = (user)=>({type: ADDUSER, user: user});
 export const SetUsersAC = (users)=>({type: SETSTATE, users: users});
 export const TotalUserCountAC = (number)=>({type: TOTALCOUNT, number: number});
 export const FollowedAC = (userId) =>({type: FOLLOWED, userId: userId});
 export const UnFollowedAC = (userId) =>({type: UNFOLLOWED, userId: userId}); 
 export const CurrentPageAC = (currentPage)=>({type: CURRENTPAGE, currentPage: currentPage});

export const getUsers = (currentPage, pageSize) =>(dispatch)=>{
		userApi.getUsers(currentPage, pageSize).then(resp =>{
			dispatch(LoadingAC(false))
			dispatch(SetUsersAC(resp.items))
			dispatch(TotalUserCountAC(resp.totalCount)) 
		})
		dispatch(LoadingAC(true))
}

export const UserFollowed = (userId) =>(dispatch)=>{
		userApi.follow(userId).then(resp =>{
			if(resp.data.resultCode == 0){
				dispatch(FollowedAC(userId))
			}
		})
}
export const UserUnFollowed =(userId)=>(dispatch)=>{
		userApi.unfollow(userId).then(resp =>{
			if(resp.data.resultCode == 0){
				dispatch(UnFollowedAC(userId))
			}
		})
}

 export default userReducer;