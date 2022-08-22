import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { InputField } from '../Common/Fields';

export default function ForgotPasswordForm({ response, isLoading,  handleSubmit }) {
	const validate = Yup.object({
		email: Yup.string().email().required('Email is required.')
	})
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={validate}
			onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
		>
            <Form>
                <InputField label='Email' type='email' name='email' placeholder='Your Email' /> 
				<div className='d-flex justify-content-center'>
					{isLoading ? 
						<button className="btn signbtn" disabled> 
							<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>  Please wait...
						</button>
					:	
						<button className="btn signbtn"> Reset Password</button>
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
		</Formik>
	)
}
