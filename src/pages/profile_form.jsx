import React from 'react';
import {reduxForm, Field} from 'redux-form';
import '../style/profile_form.css'

const ProfileForm =(props)=>{
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component="input" placeholder="Our name" name="fullName" className="edit_fullName"/>
		</div>
		<div>
			<Field component="textarea" placeholder="Say something about myself" name="aboutMe" className="edit_textarea"/>
		</div>
		{/*<div>
			A am looking for a job: <Field component="input" type="checkbox" name="lookingForAJob"/> 
		</div>*/}
		<div>
			<Field component="textarea" placeholder="Say something about our skills" name="lookingForAJobDescription" className="edit_textarea"/>
		</div>
		<div style={{textAlign: 'center'}}>
			<button className="save_button">Save</button>
		</div>
	</form>
}

const ReduxProfileForm = reduxForm ({form: 'profile'})(ProfileForm)

export default ReduxProfileForm;