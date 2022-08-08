import React, {useEffect} from 'react'
import AlgoInner from './parts/AlgoInner'
import Footer from '../../parts/Footer'

const AllAlgo = (props) => {

    useEffect(()=>{
        let nav_btn = document.getElementById("nav_btn")
        let nav_btn_mb = document.getElementById('nav_btn_mb')
        if(nav_btn)
        nav_btn.classList.add('notshow')
        if(nav_btn_mb)
        nav_btn_mb.classList.add('notshow')

    }, [])

    
    return (
        <>

            <div >
                <div className='colorAlgoone' >
                
                    <AlgoInner user={props.user}/>

                </div>
                <Footer />
            </div>

        </>
    )
}

export default AllAlgo