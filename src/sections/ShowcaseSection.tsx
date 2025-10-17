import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader";
import { projects } from '../constants';

// Get projects by id
const project1 = projects.find(p => p.id === 1);
const project2 = projects.find(p => p.id === 2);
const project3 = projects.find(p => p.id === 3);

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" className="app-showcase">
            <div className="w-full">
                <TitleHeader
                    title="Projects Showcase"
                    sub="🛠 My Recent Projects"
                />
                <div className="mt-20 showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={project1?.imgPath} alt={project1?.title} />
                        </div>
                        <div className="text-content">
                            <h2>{project1?.title}</h2>
                            <p className="text-white-50 md:text-xl">
                                {project1?.description}
                            </p>
                        </div>
                        <div className='flex items-center mt-5'>
                            {project1?.iconLists.map((icon, index) => (
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${5 * index * 2}px)`
                                    }}>
                                    <img src={icon} alt={icon} className='p-2' />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ECCD77]">
                                <img
                                    src={project2?.imgPath}
                                    alt={project2?.title}
                                />
                            </div>
                            <h2>{project2?.title}</h2>
                            <div className='flex items-center mt-3'>
                                {project2?.iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{
                                            transform: `translateX(-${5 * index * 2}px)`
                                        }}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#2A5172]">
                                <img src={project3?.imgPath} alt={project3?.title} />
                            </div>
                            <h2>{project3?.title}</h2>
                            <div className='flex items-center mt-3'>
                                {project3?.iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{
                                            transform: `translateX(-${5 * index * 2}px)`
                                        }}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection