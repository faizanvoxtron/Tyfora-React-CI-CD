import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import slideUpGsap from "../../../utilities/Animations/slideUpGsap";
import Heading from "../../Heading/Heading";
import accordionData from "./accordionData";
import BodyText from "../../BodyText/BodyText";

const VerticalAccordion = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const contentRef = useRef([]);

    const handleToggle = (index) => {
        setOpenIndex(index);
    };

    useEffect(() => {
        // Preload all images in the accordion
        accordionData.forEach((item) => {
            const img = new Image();
            img.src = item.content.image;
        });
    }, []);

    useEffect(() => {
        const handleImageLoad = () => {
            slideUpGsap(contentRef.current[openIndex], { delay: 0.3 });
        };

        const img = contentRef.current[openIndex]?.querySelector("img");
        if (img && img.complete) {
            handleImageLoad(); // Trigger immediately if already loaded
        } else if (img) {
            img.addEventListener("load", handleImageLoad); // Wait for image to load
        }

        return () => {
            if (img) img.removeEventListener("load", handleImageLoad);
        };
    }, [openIndex]);

    return (
        <div className="min-h-screen w-full overflow-hidden overflow-y-hidden">
            <div className="h-[90vh] lg:h-[75vh] flex flex-col lg:flex-row text-white border-b-0 lg:border-b border-neon border-x-0">
                {accordionData.map((item, index) => (
                    <motion.div
                        key={index}
                        onClick={() => handleToggle(index)}
                        animate={{
                            flex: openIndex === index ? 3 : 1,
                            opacity: openIndex === index ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer flex flex-col items-center justify-center border-x-0 border-b lg:border-b-0 lg:border-x border-neon overflow-hidden"
                    >
                        {openIndex === index ? (
                            <div
                                ref={(el) => (contentRef.current[index] = el)}
                                className="w-full max-w-xl p-4 lg:p-20 overflow-y-auto flex flex-col items-center"
                            >
                                <img
                                    src={item.content.image}
                                    alt={item.title}
                                    className="w-3/4 lg:w-full h-auto object-contain mb-4 mx-auto"
                                    loading="eager"
                                />
                                <Heading
                                    text={item.title}
                                    color="text-white"
                                    font="font-clashvar"
                                    size="text-50px"
                                    centered={true}
                                />
                                <BodyText text={item.content.address} size="text-25px" />
                                <BodyText text={item.content.phone} size="text-25px" />
                            </div>
                        ) : (
                            <span className="absolute font-uppercase bottom-2 right-1 flex flex-col uppercase text-60px lg:[writing-mode:vertical-rl] [writing-mode:horizontal-tb] lg:rotate-180">
                                <Heading text={item.country} isAnimate={false} />
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default VerticalAccordion;
