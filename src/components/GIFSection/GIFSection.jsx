import React, { useEffect, useState } from 'react';
import Heading from "../Heading/Heading";
import BodyText from "../BodyText/BodyText";
import { motion } from "framer-motion";
import gif from '../../assets/icons/gif.png';
import { theme } from '../../theme';
import AnimatedBackground from '../../utilities/AnimatedBackground/AnimatedBackground';
import FadeInSection from '../../utilities/Animations/FadeInSection';

const GIFSection = () => {
  const [showFirstHeading, setShowFirstHeading] = useState(false);
  const [showSecondHeading, setShowSecondHeading] = useState(false);
  const [showBodyText, setShowBodyText] = useState(false);
  const [showGIF, setShowGIF] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowFirstHeading(true);
    }, 0); // Delay for first heading

    const subtitleTimeout = setTimeout(() => {
      setShowSecondHeading(true);
    }, 2000); // Delay for second heading

    const bodyTextTimeout = setTimeout(() => {
      setShowBodyText(true);
    }, 3600); // Delay for body text

    const gifTimeout = setTimeout(() => {
      setShowGIF(true);
    }, 3600); // Delay for GIF

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
      clearTimeout(bodyTextTimeout);
      clearTimeout(gifTimeout);
    };
  }, []);

  return (
    <AnimatedBackground bgSize="contain"
      className={`min-h-screen ${theme.layoutPages.paddingHorizontal} ${theme.layoutPages.paddingVertical} flex flex-col justify-center items-center`}
    >
      {/* Left Side with Sequential Animation */}
      <div className=" flex flex-col justify-center items-center">
        {/* First Heading */}
            <Heading
              text="We Run The Code You Run The Business"
              spanText="You Run The Business"
              breakSpan={true}
              centered={true}
              size='text-85px'
            />
       


            <BodyText
              text="Leave the tech to us while you focus on scaling your business."
              centered={true}             
               />


          <BodyText
              text="Innovation simplified, success amplified."
              centered={true}  
              color='text-black' 
              fontWeight='font-semibold'          
               />


<FadeInSection className='flex justify-center'>
<img
              src={gif}
              className="w-full md:w-3/4 px-6 pt-14 " alt="GIF"
              loading='lazy'
            />

</FadeInSection>

           
        </div>

      
        {/* BodyText */}


    
    </AnimatedBackground>
  );
};

export default GIFSection;