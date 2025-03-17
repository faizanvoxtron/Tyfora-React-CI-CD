import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import BodyText from "../BodyText/BodyText";
import AnimatedBackground from "../../utilities/AnimatedBackground/AnimatedBackground";
import { theme } from "../../theme";

import './index.css';

const slideContent = {
  title: "Innovative Solutions Through",
  subtitle: "Custom Software Development",
  description:
    "Empowering businesses with tailored, cutting-edge tech solutions that transform ideas into impactful realities.",
};

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 0); // Delay for title

    const subtitleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 1200); // Delay for subtitle

    const descriptionTimeout = setTimeout(() => {
      setShowDescription(true);
    }, 2400); // Delay for description

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
      clearTimeout(descriptionTimeout);
    };
  }, []);

  return (
    <AnimatedBackground 
      className={`hero-section relative flex flex-col w-full min-h-screen`}
    >
      <div
        className={`${theme.layoutPages.paddingHorizontal} w-full grid grid-cols-12 items-center text-center py-2 lg:py-6 relative z-10 flex-grow`}
      >
        <div className="col-span-12">
          <motion.div>
            {/* Title Section */}
            <div className="relative w-full">
              <div className="invisible">
                <Heading
                  text={slideContent.title}
                  size="text-50px"
                  color="text-neon"
                />
              </div>
              {showTitle && (
                <div className="absolute top-0 left-0 w-full">
                  <Heading
                    text={slideContent.title}
                    size="text-50px"
                    color="text-neon"

                  />
                </div>
              )}
            </div>

            {/* Subtitle Section */}
            <div className="relative w-full">
              <div className="invisible">
                <Heading
                  text="Custom Software"
                  spanText="Software"
                  fontWeight="font-semibold"
                  spanFontWeight="font-normal"
                  size="text-90px"
                  className="leading-none"
              
                  centered={true}
                />
              </div>
              {showSubtitle && (
                <div className="absolute top-0 left-0 w-full">
                 <Heading
                  text="Custom Software"
                  spanText="Software"
                  fontWeight="font-semibold"
                  spanFontWeight="font-normal"
                  size="text-90px"
                  className="leading-none"

                  centered={true}
                />
                </div>
              )}
            </div>


            <div className="relative w-full">
              <div className="invisible">
                <Heading
                  text="Development"
                  fontWeight="font-semibold"
                  size="text-150px"
                  className="leading-none"

                  centered={true}
                />
              </div>
              {showSubtitle && (
                <div className="absolute top-0 left-0 w-full">
            <Heading
                  text="Development"
                  fontWeight="font-semibold"
                  size="text-120px lg:text-150px"
                  className="leading-none"

                  centered={true}
                />
                </div>
              )}
            </div>

            {/* Description Section */}
            <div className="relative w-full">
              <div className="invisible">
                <BodyText
                  text={slideContent.description}
                  centered={true}
                  className="lg:px-40"
                />
              </div>
              {showDescription && (
                <div className="absolute top-0 left-0 w-full">
                  <BodyText
                    text={slideContent.description}
                    centered={true}
                    className="md:px-20 lg:px-40"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee for logoData
      <div className="mt-auto flex justify-center items-center w-full absolute bottom-[-28px]">
        <Marquee isActive={true} />
      </div> */}
    </AnimatedBackground>
  );
};

export default Hero;
