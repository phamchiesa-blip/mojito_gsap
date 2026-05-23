import { navLinks } from "../constants"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'
import gsap from "gsap"
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'nav',
            start: 'bottom top'
        }
    });

    // khi cuộn trang thì navbar có nền blur mờ mờ
    tl.fromTo('nav', 
    {backgroundColor: 'transparent'}, 
    {
        backgroundColor: '#00000050',
        backgroundFilter: 'blur(10px)',
        durtion: 0.8,
        ease: 'power1.inOut'
    });
    });

  return (
    <nav className="">
        <div className="">
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" />
                <p className="text-5xl font-medium ml-1.5">Pachinko</p>
            </a>

            <ul>
               {navLinks.map((navLink) => (
                    <li key={navLink.id} className="hover:cursor-pointer hover:opacity-75">
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                    </li>
               )) }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar