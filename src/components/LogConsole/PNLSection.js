/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState,  } from 'react'
import { WS_HOST_URL } from '../../config'
import { endpoints } from '../../config/endpoints'

export default function PNLSection({ id }) {
	const ws = new WebSocket(`${WS_HOST_URL}/${endpoints.ws.pnl_log}`);
	const [pnl, setPnl] = useState('');
	
	useEffect(() => {
        ws.onopen = () => {
            console.log('pnl ws opened')
            ws.send(`pnl${id}`)
        };
        ws.onclose = () => {
            console.log('pnl ws closed')
        };
        ws.onerror = (err) => {
            console.error("PNL Socket encountered error: ", err.message, "Closing socket");
        }
        ws.onmessage = (e) => {
            try {
                if (e.data){
                    
                    setPnl(pnl => e.data)
                }
            } catch (err) {
                console.log(err);
            }
        };
        return () => {
            ws.close();
        }
    }, []);
	return (
		<h3 className="font-weight-500 mb-xl-4 text-primary">PNL: {pnl}</h3>
	)
}
