// import { useQuery, useQueryClient } from 'react-query';
import { useMutation } from 'react-query';
import { API_HOST_URL } from '../config';
import { endpoints } from '../config/endpoints';
import { fetchJson } from '../lib/api';

// Registration
export function useRegistration() {
	const mutation = useMutation(({ first_name, last_name, email, phone, profession, city, state, password, }) => fetchJson(`${API_HOST_URL}/${endpoints.account.register}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ first_name, last_name, email, phone, profession, city, state, password })
	}, true))
    return { 
        handleRegistration: async (first_name, last_name, email, phone, profession, city, state, password) => {
            try {
                const res = await mutation.mutateAsync({ first_name, last_name, email, phone, profession, city, state, password });
                const user = await res.json()
                return {
                    status: res.status,
                    ...user
                }
            } catch (err) {
                return false
            }            
        },
        loading: mutation.isLoading,
    }
}


// Forgot Password 
export function useForgotPassword() {
	const mutation = useMutation(({ email }) => fetchJson(`${API_HOST_URL}/${endpoints.account.forgot_password}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
	}, true))
    return { 
        handleForgotPassword: async (email) => {
            try {
                const res = await mutation.mutateAsync({ email });
                const resData = await res.json()
                return {
                    ...resData,
                    status: res.status,
                }
                
            } catch (err) {
                return false
            }            
        },
        ForgotPwdIsLoading: mutation.isLoading,
    }
}


// Reset Password 
export function useResetPassword() {
	const mutation = useMutation(({ uidb64, token, password }) => fetchJson(`${API_HOST_URL}/${endpoints.account.reset_password}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ uidb64, token, password })
	}, true))

    return { 
        handleResetPassword: async (uidb64, token, password) => {
            try {
                const res = await mutation.mutateAsync({ uidb64, token, password });
                const resData = await res.json()
                return {
                    ...resData,
                    status: res.status,
                }
            } catch (err) {
                return false
            }            
        },
        pwdResetIsLoading: mutation.isLoading,
    }
}


// Verify Password Reset Link Token
export const checkForgotPasswordVerificationToken = async (uid, token) => {
    try {
        const res = await fetchJson(`${API_HOST_URL}/${endpoints.account.fp_token_verify}/${uid}/${token}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }, true)
        const resData = await res.json()
        return {
            status: res.status,
            ...resData,
        }
    } catch (err) {
        return {
            status: 400,
            data: err,
        }
    }
    
}