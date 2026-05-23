import { openingHours, socials, iceCreams } from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
import { useState } from 'react';

const Contact = () => {
	const [indexIce, setIndexIce] = useState(0);
	const [active, setActive] = useState("icecream");

 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
	 .from('.ic-img', {
		opacity: 0,
		x: -100,
		duration: 0.7,
		ease: 'power1.inOut',
	 })
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 }, '>')
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 }, '<')
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	}, [active]);

	
 return (
	<>
		<footer id="contact">

		<div className="h-screen content">
			<h2 className="items-center text-gray-400">Ice-cream for summer</h2>
			<div>
				<ul className='flex flex-row justify-around text-3xl font-semibold'>
					<li onClick={() => {
						setIndexIce(0)
						setActive("icecream")
					}}
					className={active === "icecream" ? "text-green-800" : "text-white"}>
						Marau Ice-cream
					</li>
					<li onClick={() => {
						setIndexIce(1)
						setActive("cones")
					}}
					className={active === "cones" ? "text-sky-200" : "text-white"}>
						Ice-cream cones
					</li>
					<li onClick={() => {
						setIndexIce(2)
						setActive("fruit")
					}} 
					className={active === "fruit" ? "text-yellow-200" : "text-white"}>
						Fruit Ice-cream
					</li>
				</ul>
			</div>

			<div className="flex justify-center ic-img">
					<img src={iceCreams[indexIce].image} className='w-100vw h-50vh items-center' />
			</div>
			
		</div>

		<img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
		<img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
		 
		 <div className="content">
			<h2>Where to Find Us</h2>
			
			<div>
			 <h3>Visit Our Bar</h3>
			 <p>Km9 Nguyen Trai Street, Dai Mo District, Hanoi City, Viet Nam</p>
			</div>
			
			<div>
			 <h3>Contact Us</h3>
			 <p>(+84) 0383299116</p>
			 <p>phamchiesa@gmail.com</p>
			</div>
			
			<div>
			 <h3>Open Every Day</h3>
			 {openingHours.map((time) => (
				<p key={time.day}>
				 {time.day} : {time.time}
				</p>
			 ))}
			</div>
			
			<div>
			 <h3>Socials</h3>
			 
			 <div className="flex-center gap-5">
				{socials.map((social) => (
				 <a
				 	key={social.name}
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.name}
				 >
					<img src={social.icon} />
				 </a>
				))}
			 </div>
			</div>
		 </div>
		</footer>
	</>
 )
}

export default Contact