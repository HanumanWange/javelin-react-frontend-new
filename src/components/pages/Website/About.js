import React, { useEffect } from 'react';
import Contact from '../../parts/Contact';
import Footer from '../../parts/Footer';
import Aboutinner from './parts/Aboutinner';
import { Helmet } from "react-helmet";

const About = () => {

	useEffect(() => {
		let nav_btn = document.getElementById("nav_btn")
		let nav_btn_mb = document.getElementById('nav_btn_mb')
		if (nav_btn)
			nav_btn.classList.add('notshow')
		if (nav_btn_mb)
			nav_btn_mb.classList.add('notshow')

	}, [])


	return (
		<>
			<Helmet>
				<title>About - Javelin Traders</title>
			</Helmet>
			<Aboutinner />


			<Footer />
		</>
	)
}

export default About