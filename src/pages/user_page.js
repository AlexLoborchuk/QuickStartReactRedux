import React from 'react';
import {Redirect, Link, NavLink} from 'react-router-dom';
import DefaultAvatar from '../Assets/user_avatar.png';
import HeaderContainer from './common/HeaderContainer';
import NavigationSection from './common/NavigationSection';
import "../style/users_page.css";
import classNames from 'classnames';
import FetchingPage from './common/FetchingPage'

//import withFetchingConnect from '../hoc/withFetching';

class Users extends React.PureComponent{
	state={
		name: '',
		surname: '', 
		portionNumber: 1
	}
	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
		// userApi.getUsers(this.props.currentPage, this.props.pageSize).then(resp =>{
		// 	this.props.setUsers(resp.items)
		// 	this.props.TotalUsersCount(resp.totalCount) 
		// 	this.props.DataLoading(false)
		// })
		// this.props.setUsers([
		// 		{name: 'Alex',surname: 'Lobor'},
		// 		{name: 'Andrew',surname: 'Loborchuk'}
		// 	])
		//	this.props.DataLoading(true)
	}
	// changeName=(e)=>{
	// 	this.setState({name: e.target.value})
	// }
	// changeSurname=(e)=>{
	// 	this.setState({surname: e.target.value})
	// }
	handleSubmit =(event)=>{
		event.preventDefault();
		let user = {name: this.state.name, surname: this.state.surname};
		//this.props.userAdd(user)
	}
	onPageChanged = (pageNumber)=>{
			this.props.CurrentPage(pageNumber)
			this.props.getUsers(pageNumber, this.props.pageSize)
	}
	render() {
		let pagesCount = Math.ceil (this.props.totalCount/this.props.pageSize);
		let pages = [];
		let startPoint = (this.state.portionNumber-1)* this.props.pageSize+1;
		let endPoint = this.state.portionNumber * this.props.pageSize;
		for (let i=1; i<pagesCount; i++){
			pages.push(i);
		}
		let users = this.props.users.map((item, index)=>{
			return <div key={index} className="profile_body">
						<NavLink to={"/profile/" + item.id}>
							<img src ={item.photos.small || DefaultAvatar} className="avatar_small"/>
						</NavLink>
						<p className="user_name">{item.name} {item.surname}</p>
						{item.followed ?
						<button onClick={() => {this.props.UnFollowed(item.id);}} className="follow_bottom">UnFollow</button>
					: <button onClick={() => {this.props.Followed(item.id);}} className="follow_bottom">Follow</button>
					}
					</div>
		});
		return (
			<div>
				{this.props.fetching ? <FetchingPage />
				: <div>
				<HeaderContainer/>
					<div className="users_body">
						<NavigationSection/>
						<div className="main_block_users">
					 		{users}
					 	</div>
					</div>
						<div className="paginator">
							{startPoint > 1 ? 
								 <button onClick = {()=>{this.setState({portionNumber: this.state.portionNumber - 1})}}>
									PREV
								</button>
								: null}
							{pages.filter(p => p>= startPoint && p<=endPoint).map( (p, index) =>{
								return <span key={index} className = {classNames("number_pagination", 
									{["active_number_page"]: this.props.currentPage === p})
							}
									onClick = {()=>{this.onPageChanged(p);}}> {p} </span>
								}
							)}
							{pagesCount > endPoint ? <button onClick = {()=>{this.setState({portionNumber: this.state.portionNumber + 1})}}>
								NEXT
							</button>
							: null}
						</div>
				</div>}
			</div>
		);
	}
};

export default Users