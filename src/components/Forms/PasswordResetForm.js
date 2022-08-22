import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { InputField } from '../Common/Fields';


export default function PasswordResetForm({response, isLoading,  handleSubmit}) {
	const validate = Yup.object({
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters.')
			.required('New password is required.'),
		password2: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Password must match.')
			.required('Confirm password is required.'),
	})
	return (
		<Formik
			initialValues={{
				password: '',
				password2: '',
			}}
			validationSchema={validate}
			onSubmit={ (values, { resetForm }) => handleSubmit(values, resetForm)}
		>	
		{formik => (
		<>
			<Form>
				<InputField label='New Password' type='password' name='password' />
				<InputField label='Confirm Password' type='password' name='password2' />
				
                <div className='d-flex justify-content-center'>
					{isLoading ? 
						<button className="btn signbtn" disabled> 
							<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>  Please wait...
						</button>
					:	
						<button className="btn signbtn"> Set Password</button>
					} 
				</div>
                {response && response.status && 
					<p className="d-flex justify-content-center mt-3">
						<span className={`${response.status !== 200 ? 'alert-danger': 'alert-success'} alert rounded p-2`}>
							{response.detail}
						</span>
					</p>
                } 
			</Form>
		</>
		)}
		</Formik>
	)
}
