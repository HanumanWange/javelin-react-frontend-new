import { Field, useField, ErrorMessage } from 'formik';
export const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return <div className='mb-2'>
        <label htmlFor={field.name}>{label}</label>
        <Field
            className={`form-control form-control-lg mt-2 ${meta.touched && meta.error && 'is-invalid'} `}
            autoComplete='off'
            {...field}
            {...props}
        />
        <ErrorMessage name={field.name} component='div' className='error mt-1' />
    </div>
}


export const CheckField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return <div className='form-check form-check-inline mb-2'>
        <Field
            className={`form-check-input ${meta.touched && meta.error && 'is-invalid'} `}
            {...field}
            {...props}
        />
        <label className="form-check-label" htmlFor={field.name}>{label}</label>
        <ErrorMessage name={field.name} component='div' className='error' />
    </div>
}
