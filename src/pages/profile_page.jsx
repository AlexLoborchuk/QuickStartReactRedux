import React, {useState} from 'react'
import {Redirect, Link, NavLink} from 'react-router-dom';
import DefaultAvatar from '../Assets/user_avatar.png';
import HeaderContainer from './common/HeaderContainer';
import NavigationSection from './common/NavigationSection';
import "../style/profile_page.css";
import ProfileForm from './profile_form'

const Profile =(props) =>{
	let [count, setCount] = useState(0)
	let [edimMode, setEditMode] = useState(false)
	const winner = ()=>{
		setCount(0); 
		alert('You WIN')
	}
	const mainPhotoSelected =(e) =>{
		if(e.target.files.length)
		props.savePhoto(e.target.files[0]);
	}
	const changeProfileData =(newProfileData)=>{
		props.saveProfileData(newProfileData);
		setEditMode(false)
	}

	return <div>
		<HeaderContainer />
		<div className="main_profile">
			<NavigationSection />
			<div>
				<div className="friends_title">
					<label>
						{props.isOwner && <input type={'file'} onChange={mainPhotoSelected} style={{display: 'none'}}/>}
						<img src={props.profileData.photos.large || DefaultAvatar}  className="profile_image"/>
					</label>
				</div>
					{!edimMode ? <div>
						<h3 style={{textAlign: 'center'}}>{props.profileData.fullName}</h3>
						<h4 className="title_description">ABOUT ME</h4>
						<div className="title_body">{props.profileData.aboutMe ? props.profileData.aboutMe : "--------"}</div>
						{/*<div>Looking for a job: {props.profileData.lookingForAJob ? "yes": "no"}</div>*/}
						<h4 className="title_description">My professional skills</h4>
						<div className="title_body">{props.profileData.lookingForAJobDescription ? props.profileData.lookingForAJobDescription : "--------"}</div>
					{props.isOwner && <div className="button_place">
							<button onClick = {()=>{setEditMode(true)}} className="edit_button">Edit profile</button> 
						</div>}
				</div> : <ProfileForm initialValues ={props.profileData} onSubmit={changeProfileData}/>}
				</div>
				<div>
					<div>
						<h3 className="text_simulator">Тренажер кліків</h3>
						<div className="text_simulator">{count}</div>
						<div className="button_place">
							<button onClick={()=>{setCount(count+1)}} className = "edit_button">Click</button>
						</div>
						{count > 10 ? winner(): null}
					</div>
					<div>
						<h3 className="friends_title">FRIENDS</h3>
						<div className = "friends_list">{
							props.users.map((item, index)=>{
							return <div key={index} className="friends_body">
									<img src ={item.photos.small || DefaultAvatar} className="friends_image"/>
								<p className="friends_name"> {item.name} {item.surname}</p>
							</div>
							})
						}
						</div>
					</div>
				</div>
		</div>
	</div>
}

export default Profile