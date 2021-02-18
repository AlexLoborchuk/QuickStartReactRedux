import React from 'react';
import {Redirect} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import '../style/login_module.css';

const LoginForm =(props)=>{
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field type="text" component="input" name="email" placeholder ="email" className="input"/>
		</div>
		<div>
			<Field type="password"  component="input" name="password"  placeholder ="password" className="input"/>
		</div>
		<div>
			{props.captchaUrl ? <img src = {props.captchaUrl} className="captcha"/> : null}
		</div>
		<div>
			{props.captchaUrl ? <Field component="input" name="captcha"  placeholder ="edit captcha" className="input"/> : null}
		</div>
		<div className="button_block">
			<button type='submit' className="button">{props.redirect ? <Redirect to='/user'/>: 'LOGIN'}</button>{/* */}
		</div>
	</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;