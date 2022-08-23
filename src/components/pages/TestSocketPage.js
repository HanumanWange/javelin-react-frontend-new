/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { WS_HOST_URL } from '../../config';
import { endpoints } from '../../config/endpoints';

export default function TestSocketPage() {
    let { slug } = useParams();
    const [isOnline, setIsOnline] = useState(false);
    const [logs, setLogs] = useState([]);
    const [msgCount, setMsgCount] = React.useState(0);
    const [pnl, setPnl] = useState('');

    const ws = new WebSocket(`${WS_HOST_URL}/${endpoints.ws.trade_log}`);
    const ws1 = new WebSocket(`${WS_HOST_URL}/${endpoints.ws.pnl_log}`);
    useEffect(() => {
        ws.onopen = () => {
            console.log('ws opened')
            ws.send(JSON.stringify({ "group_name": slug }))
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

    useEffect(() => {
        ws1.onopen = () => {
            console.log('ws1 opened')
            ws1.send(slug)
        };
        ws1.onclose = () => {
            setIsOnline(false);
            console.log('ws1 closed')
        };
        ws1.onerror = (err) => {
            console.error("Socket encountered error: ", err.message, "Closing socket");
        }
        ws1.onmessage = (e) => {
            try {
                if (e.data){
                    
                    setPnl(pnl => e.data)
                }
            } catch (err) {
                console.log(err);
            }
        };
        return () => {
            ws1.close();
        }
    }, []);
    
    
    
    return (
        <div>
            <div>{isOnline ? 'Online' : 'Offline'}</div>
            <div>Received Messages: {msgCount}</div>
            <div>PNL: {pnl}</div>
            {logs && logs.map((v, i) => (<p key={i}> {v}</p>))}


        </div>
    )
}
