import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import BodyText from "../BodyText/BodyText";
import { theme } from "../../theme";
import AnimatedBackground from "../../utilities/AnimatedBackground/AnimatedBackground";

const InnerHero = ({
  height = "min-h-screen",
  headingText,
  spanText,
  headingSize = "text-70px lg:text-90px",
  headingSize2 = "text-50px lg:text-60px",
  headingColor = "text-black",
  headingspanColor = "text-neon",
  headingText2 = "",
  spanText2 = "",
  bodyText,
  bodySize = "text-35px",
  gap = "gap-4",
  centeredHeading1 = true,
  centeredHeading2 = true,
  centeredbodyText = true,
  breakSpan1 = false,
  isCareer = false, // New prop
  image = null, // New prop for the image
}) => {
  const [showHeading1, setShowHeading1] = useState(false);
  const [showHeading2, setShowHeading2] = useState(false);
  const [showBodyText, setShowBodyText] = useState(false);

  useEffect(() => {
    const heading1Timeout = setTimeout(() => setShowHeading1(true), 0);
    const heading2Timeout = setTimeout(() => {
      if (headingText2) setShowHeading2(true);
    }, 1000);
    const bodyTextTimeout = setTimeout(() => {
      setShowBodyText(true);
    }, headingText2 ? 1000 : 200);

    return () => {
      clearTimeout(heading1Timeout);
      clearTimeout(heading2Timeout);
      clearTimeout(bodyTextTimeout);
    };
  }, [headingText2]);

  return (
    <AnimatedBackground
      isInner={true}
      className={`flex flex-col w-full items-center justify-center ${gap} ${height} ${
        theme.layoutPages.paddingHorizontal
      } ${isCareer ? "lg:flex-row" : ""}`} // Switch to row on lg screens when isCareer is true
    >
      {/* Text Content */}
      <div
        className={`flex flex-col ${gap} ${
          isCareer ? "lg:w-[60%] w-full items-start" : "w-full items-center"
        }`} // Text takes 60% width on lg screens when isCareer is true
      >
        {/* Heading 1 */}
        {showHeading1 && (
          <Heading
            text={headingText}
            size={headingSize}
            spanText={spanText}
            color={headingColor}
            spanColor={headingspanColor}
            breakSpan={breakSpan1}
            centeredHeading1={!isCareer && centeredHeading1}
            className={`leading-tight ${isCareer ? "text-start" : "text-center"}`} // Dynamic alignment
            />
        )}

        {/* Heading 2 with Green Border */}
        {headingText2 && (
          <div className={`w-full flex ${isCareer ? "justify-start" : "justify-center"}`}>
            {showHeading2 && (
              <div className="border-4 rounded-full border-neon px-6 py-2 inline-block">
                <Heading
                  text={headingText2}
                  spanText={spanText2}
                  color="text-black"
                  spanColor="text-neon"
                  size={headingSize2}
                  fontWeight="font-medium"
                  centeredHeading2={!isCareer && centeredHeading2}
                  className="tracking-widest"
                />
              </div>
            )}
          </div>
        )}

        {/* Body Text */}
        {showBodyText && (
          <BodyText
            text={bodyText}
            size={bodySize}
            centeredbodyText={!isCareer && centeredbodyText}
          />
        )}
      </div>

      {/* Image Section */}
      {isCareer && image && (
        <div className={`${isCareer ? "lg:w-[40%] w-full" : ""} flex justify-center`}>
          <img src={image} alt="Career" className="w-3/4 h-auto" />
        </div>
      )}
    </AnimatedBackground>
  );
};

export default InnerHero;