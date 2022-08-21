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