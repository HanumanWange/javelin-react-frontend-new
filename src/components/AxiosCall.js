import axios from "axios";

async function AxiosCall(props) {
	let data = {}
	let headers;

	if (props.is_auth) {
		let all_data = JSON.parse(localStorage.getItem('user_data'))

		if (!all_data) {
			data.response = false
			data.message = 'User Data Not Found!'
			return data
		}
		let token = all_data.access_token

		headers = {
			headers: {
				'Content-Type': 'multipart/form-data',
				"Authorization": `Bearer ${token}`,
			}
		}
	}
	else {
		headers = {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		}
	}
	if (props.method === 'get') {
		await axios.get(props.url, headers).then(resp => {
			data.response = true
			data.bknd_data = resp.data
		})
			.catch(err => {
				data.response = false

			})
	}

	else if (props.method === 'post') {
		await axios.post(props.url, props.post_data, headers).then(resp => {
			data.response = true
			data.bknd_data = resp.data
		})
			.catch(err => {
				data.response = false
			})
	}

	else if (props.method === 'put') {
		await axios.put(props.url, props.post_data, headers).then(resp => {
			data.response = true
			data.bknd_data = resp.data
		})
			.catch(err => {
				data.response = false
				// console.log('Axios Call Error', err.status)
			})
	}
	return data
}

export default AxiosCall