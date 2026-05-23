import { useRef } from "react";
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Hero = () => {
    const videoRef = useRef();
    const isMobile = window.innerWidth <= 767;

    useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paraSplit = new SplitText('.subtitle', {type: 'lines'});

    heroSplit.chars.forEach(char => {
        char.classList.add('text-gradient');
    });

    gsap.from(heroSplit.chars, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1
    });

    gsap.from(paraSplit.lines, {
        opacity: 0,
        y: 100,
        delay: 1,
        ease: 'expo.out',
        stagger: 0.2
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    })
    // go up
    .to('.left-leaf', {
        y: -200 
    })
    // move down
    .to('.right-leaf', {
        y: 200
    }, "<");

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Video gsap timeline: cuộn chuột = tua video
    const tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
// onloadedmetadata(): Đây là event của thẻ video trong JavaScript.
// Nó sẽ chạy khi:
// video đã tải xong các thông tin cơ bản
// ví dụ:
// - duration (độ dài video)
// - width / height
// - fps
// - metadata khác
	if (!videoRef.current) return;

    videoRef.current.onloadedmetadata = () => {
    tl.to(videoRef.current, {
    currentTime: videoRef.current.duration,
    });
    };
    }, []);
    
  return (
    <>
    <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img src="/images/hero-left-leaf.png" alt="" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />

        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Cool. Chill. Classic.</p>
                    <p className="subtitle">
                        Sip the Spirit <br /> of Summer 
                    </p>
                </div>

                <div className="view-cocktails">
                    <p className="subtitle">
                        Every cocktail on our menu is a blend of premium ingredients,
				        creative flair, and timeless recipes — designed to delight your
				        senses.
                    </p>
                    <a href="#cocktails" className="">View Cocktails</a>
                </div>
            </div>
        </div>
    </section>

    <div className="video absolute inset-0">
        <video 
        ref={videoRef}
        src="/videos/input.mp4" 
        muted
        playsInline
        preload="auto"
        />
    </div>
    </>
  )
}

export default Hero