import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { RiTwitterFill } from 'react-icons/ri';
import { BiLink } from "react-icons/bi";
import './index.css';
import Logo1 from "src/love/hAsset/1.png";
import Logo2 from "src/love/hAsset//2.png";
import Logo3 from "src/love/hAsset//3.png";


const Footer = ({Redux}) => {
	// Variables
	const object = Redux?.state?.ReceivedObject?.HomeList

	// JSX	
	return (
		// object && 
		<footer>
			<a href='#' className='footer__logo' >	
				<img 
					src={
						import.meta.env.VITE_APPLICATION === "ApurvChatur" ? Logo1 :
						import.meta.env.VITE_APPLICATION === "SofieBerkin" ? Logo2 :
						import.meta.env.VITE_APPLICATION === "AnushreeMandape" ? Logo3 : 
						Logo1
					} 
					alt="" 
					className='footer__logo_img' 
				/>
				{object?.subTitle}
			</a>

			<ul className='permalinks' >
				<li><a href='#' >Home</a></li>
				{/* {Redux.state.ReceivedObject.AboutList && <li><a href='#about' >About</a></li>}
				{Redux.state.ReceivedObject.ExperienceList && <li><a href='#experience' >Experience</a></li>}
				{Redux.state.ReceivedObject.ServiceList && <li><a href='#service' >Service</a></li>}
				{Redux.state.ReceivedObject.PortfolioList && <li><a href='#portfolio' >Porfolio</a></li>}
				{Redux.state.ReceivedObject.EventList && <li><a href='#event' >Event</a></li>}
				{Redux.state.ReceivedObject.BlogList && <li><a href='#blog' >Blog</a></li>} */}
			</ul>

			<div className='footer__socials' >
				{object?.links &&
					object.links.map((each, index) => {
						return (
							<a href={each.url} target="_blank" rel='noreferrer' key={index} >
								{
									each.icon === "github" ? <FaGithub /> :
									each.icon === "linkedin" ? <BsLinkedin /> :
									each.icon === "facebook" ? <FaFacebookF /> :
									each.icon === "instagram" ? <BsInstagram /> :
									each.icon === "twitter" ? <RiTwitterFill /> : <BiLink />
								}
							</a>
						)
					})
				}
			</div>

			<div className='footer__copyright'>
					<small>&copy; Copyright</small>
			</div>

		</footer>
	)
}

export default Footer