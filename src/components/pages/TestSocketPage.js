/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { WS_HOST_URL } from '../../config';
import { endpoints } from '../../config/endpoints';

export default function TestSocketPage() {
	let { slug } = useParams();
	const [isOnline, setIsOnline] = useState(false);
	const [logs, setLogs] = useState([]);
	var ws = new WebSocket(`${WS_HOST_URL}/${endpoints.ws.trade_log_json}`);
	useEffect(() => {
		
		ws.onopen = () => console.log('ws opened');
		ws.onclose = () => console.log('ws closed');
		ws.onerror = (err) => {
			console.error("Socket encountered error: ", err.message,"Closing socket");
		}
		ws.onmessage = (e) => {
			const message = JSON.parse(e.data);
			console.log('e', message);
			setIsOnline(true);
		};
		

		return () => {
			ws.close();
		}
	}, []);

	// useEffect(() => {
	// 	ws.onmessage = (e) => {
	// 		// const message = JSON.parse(e.data);
	// 		console.log('e', e.data);
	// 		setIsOnline(true);
	// 		// setLogs([...logs, e.data])
	// 	};
		

	// }, []);
	

	const sendMessage = () => {
		console.log('message click', slug);
		// setLogs([...logs, 'e.data'])
		console.log(slug);
		ws.send(JSON.stringify({"group_name": "test_group"}))
		
		if (ws.readyState === WebSocket.OPEN) {
			ws.send(JSON.stringify({"dasdas": "test_group"}))
		}
	};
	return (
		<div>TestSocketPage
			{/* {console.log('isOnline -> ',isOnline)}
			{console.log('readyState -> ',ws.readyState)}
			{console.log('WebSocket.OPEN -> ',WebSocket.OPEN)} */}
			<button onClick={sendMessage}>send</button> 
			{/* {logs.length > 0 && logs.map((v, i) => console.log('v -> ',v))}
			{console.log('logs ->', logs.length)}
			{logs.length > 0 && logs.map((v, i) => (<p key={i}> {v}</p>))} */}
			{/* {logs} */}
			{console.log('logs ->', logs)}
		</div>
	)
}
