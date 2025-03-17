import Heading from "../Heading/Heading";
import BodyText from "../BodyText/BodyText";
import { useState } from "react";
import { theme } from "../../theme";
import AnimatedBackground from "../../utilities/AnimatedBackground/AnimatedBackground";
import Highlights from "./modules/Highlights";

const UniqueApproach = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const handleFirstHeadingComplete = () => setAnimationStep(1);
  const handleBodyTextComplete = () => setAnimationStep(2);

  return (
    <AnimatedBackground noGrid ={true} 
      className={`flex  flex-col justify-center min-h-screen overflow-hidden ${theme.layoutPages.paddingHorizontal} ${theme.layoutPages.paddingVertical}`}
    >
      <div className={``}>
        <div className="relative">
          {/* Animated Heading */}
          <div className="absolute w-full">
            <Heading
              text="Our Unique Approach"
              spanText="Approach"
              centered={true}
              isAnimate={animationStep === 0}
              onAnimationComplete={handleFirstHeadingComplete}
            />
          </div>
          {/* Placeholder Heading */}
          <div className="invisible">
            <Heading
              text="Our Unique Approach"
              spanText="Approach"
              centered={true}
              isAnimate={false}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Animated Body Text */}
        {animationStep >= 1 && (
          <div className="absolute w-full">
            <BodyText
              text="At Tyfora, innovation meets precision. Our client-centric approach ensures we understand your vision, ideate effectively, and deliver solutions that exceed expectations. From concept to deployment, we bring expertise and passion to every project."
              centered={true}
              isAnimate={animationStep === 1}
              onAnimationComplete={handleBodyTextComplete}
            />
          </div>
        )}
        {/* Placeholder Body Text */}
        <div className="invisible">
          <BodyText
            text="At Tyfora, innovation meets precision. Our client-centric approach ensures we understand your vision, ideate effectively, and deliver solutions that exceed expectations. From concept to deployment, we bring expertise and passion to every project."
            centered={true}
            isAnimate={false}
          />
        </div>
      </div>

      <div className={`relative ${theme.layoutPages.paddingVerticalTop} px-0`}>
        {/* Animated Highlights */}
        {animationStep >= 1 && (
          <div className={`absolute w-full`}>
            <Highlights />
          </div>
        )}
        {/* Placeholder Highlights */}
        <div className="invisible">
          <Highlights />
        </div>
      </div>
    </AnimatedBackground>
  );
};

export default UniqueApproach;