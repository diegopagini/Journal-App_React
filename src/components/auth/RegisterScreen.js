/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const [formValues, handleInputChange] = useForm({
		name: 'Diego',
		email: 'diego@gmail.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (ifFormValid()) {
			console.log('formulario correcto');
		}
	};

	const ifFormValid = () => {
		if (name.trim().length === 0) {
			console.log('name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('email is not valid');
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log('invalid password');
			return false;
		}
		return true;
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form onSubmit={handleRegister}>
				<div className='auth__alert-error'>error</div>
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Password'
					name='password'
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className='auth__input'
					type='password'
					placeholder='Confirm Password'
					name='password2'
					value={password2}
					onChange={handleInputChange}
				/>
				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>

				<Link className='link' to='/auth/login'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
