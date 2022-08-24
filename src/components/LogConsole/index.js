/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef,  } from 'react'
import './LogConsole.css';
import { WS_HOST_URL } from '../../config'
import { endpoints } from '../../config/endpoints'


export default function LogConsole({ id }) {
	const [isOnline, setIsOnline] = useState(false);
	const [msgCount, setMsgCount] = React.useState(0);
	const [logs, setLogs] = useState([]);
	const ws = new WebSocket(`${WS_HOST_URL}/${endpoints.ws.trade_log}`);

	const logConsolDiv = useRef()
	
	useEffect(() => {
		console.log('useEffect calling')
        ws.onopen = () => {
            console.log('ws opened')
            ws.send(JSON.stringify({ "group_name": id }))
        };
        ws.onclose = () => {
            setIsOnline(false);
            console.log('ws closed')
        };
        ws.onerror = (err) => {
            console.error("Socket encountered error: ", err.message, "Closing socket");
        }
        ws.onmessage = (e) => {
            const json = JSON.parse(e.data);
            setIsOnline(true);
			setLogs(logs => ['Connected to server...'])
            try {
                if (json.payload){
                    
                    setMsgCount(count => count + 1);
                    setLogs(logs => [...logs, json.payload])
                }
            } catch (err) {
                console.log(err);
            }
        };
        return () => {
            ws.close();
        }
    }, []);

	
	const scrollToBottomWithSmoothScroll = () => {
		logConsolDiv.current.scrollTo({
			 top: logConsolDiv.current.scrollHeight,
			 behavior: 'smooth',
		   })
	 }
	
	useEffect(() => {
		scrollToBottomWithSmoothScroll();
	}, [logs])
	return (
		<>			
			<div className="row mt-3 console_row">
				<div className="col-md-6 grid-margin border stretch-card  shadow-sm rounded">
					<div className="card position-relative">
					
						<div className="card-body" style={{minHeight: 200}}>
							<div class="d-flex justify-content-between align-items-center">
								<h5>Console Log</h5>
								{isOnline ? <span className="badge bg-danger">Live <span class="badge bg-dark">{msgCount}</span></span> 
								: 
									<span class="badge bg-dark">Offline</span>}
							</div>
							<hr />
							<div style={{overflowY: 'scroll', height: '200px'}} id="logConsol" ref={logConsolDiv}>
								{logs && logs.map((v, i) => (
									<p key={i} className="log_text"> {v}</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div> 
		</>
	)
}
