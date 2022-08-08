import React, { useEffect } from 'react';
import Footer from '../../parts/Footer';
import Training from '../../parts/Trainings';

const AlgoTraining = () => {

    useEffect(() => {
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

               
                <Training/>
                <Footer />
            </div >


        </>
    )
}

export default AlgoTraining