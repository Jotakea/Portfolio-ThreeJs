import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { education } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    useGSAP(() => {
        // Animate the timeline height as the user scrolls
        // from the top of the timeline to 70% down the screen
        // The timeline height should scale down from 1 to 0
        // as the user scrolls up the screen
        gsap.to(".timeline-ed", {
            // Set the origin of the animation to the bottom of the timeline
            transformOrigin: "bottom bottom",
            // Animate the timeline height over 1 second
            ease: "power1.inOut",
            // Trigger the animation when the timeline is at the top of the screen
            // and end it when the timeline is at 70% down the screen
            scrollTrigger: {
                trigger: ".timeline-ed",
                start: "top center",
                end: "70% center",
                // Update the animation as the user scrolls
                onUpdate: (self) => {
                    // Scale the timeline height as the user scrolls
                    // from 1 to 0 as the user scrolls up the screen
                    gsap.to(".timeline-ed", {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });

        // Loop through each edText element and animate them in
        // as the user scrolls to each text element
        gsap.utils.toArray<HTMLElement>(".edText").forEach((text) => {
            // Animate the text opacity from 0 to 1
            // and move it from the left to its final position
            // over 1 second with a power2 ease-in-out curve
            gsap.from(text, {
                // Set the opacity of the text to 0
                opacity: 0,
                // Move the text from the left to its final position
                // (xPercent: 0 means the text is at its final position)
                xPercent: 0,
                // Animate over 1 second
                duration: 1,
                // Use a power2 ease-in-out curve
                ease: "power2.inOut",
                // Trigger the animation when the text is 60% down the screen
                scrollTrigger: {
                    // The text is the trigger element
                    trigger: text,
                    // Trigger the animation when the text is 60% down the screen
                    start: "top 60%",
                },
            });
        }, "<"); // position parameter - insert at the start of the animation
    }, []);

    return (
        <section
            id="education"
            className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader
                    title="Education"
                    sub="🎓 My Education Overview"
                />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {education.map((card) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="timeline-ed-wrapper">
                                    <div className="timeline-ed" />
                                    <div className="gradient-line-ed w-1 h-full" />
                                </div>
                                <div className="flex items-start">

                                    <div className="edText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                        <div className="timeline-logo ">
                                            <img src={card.imgPath} alt="logo" />
                                        </div>
                                        <div>
                                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                                            <h1 className="font-semibold text-2xl my-5 text-white-50">{card.school}</h1>
                                            <p className="my-5 text-white-50">
                                                🗓️&nbsp;{card.date}
                                            </p>
                                            <p className="ms-5 my-5 flex flex-col gap-3 text-white-50">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;