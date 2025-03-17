import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import { theme } from "../../theme";
import footerBg from "../../assets/images/footer-bg.png";
import ScrollToTopLink from "../../utilities/ScrollToTopLink";

const Footer = () => {
    return (
        <div
        className="relative h-screen w-full bg-contain bg-no-repeat flex flex-col justify-center items-center"
        style={{ 
            backgroundImage: `url(${footerBg})`, 
            backgroundPosition: "center bottom -20px" // Moves the image further down
        }}
    >
    <div className="flex flex-col pt-20 lg:pt-40">
    <Heading
                text="Innovating Beyond Boundaries,"
                color="text-black"
                size="text-75px"
                centered={true}
                className="leading-tight"
            />
            <Heading
                text="Together."
                size="text-150px"
                centered={true}
                fontWeight="font-semibold"
                className="uppercase leading-tight"

            />



    </div>
          

            {/* Footer Links */}
            <div className="absolute bottom-4 w-full px-8 text-black text-30px">
                {/* Copyright (Top Row - Centered) */}
                <div className="w-full text-center mb-4 lg:hidden">
                    <span>
                        Copyright &copy; {new Date().getFullYear()}{" "}
                        <span className="uppercase font-bold">TYFORA.</span> All rights reserved.
                    </span>
                </div>

                {/* T&C and Privacy Policy (Second Row - Centered) */}
                <div className="w-full text-center lg:hidden">
                    <ScrollToTopLink to="/terms-and-conditions" className="smooth-hover">
                        Terms & Conditions
                    </ScrollToTopLink>
                    <span className="mx-2">|</span>
                    <ScrollToTopLink to="/privacy-policy" className="smooth-hover">
                        Privacy Policy
                    </ScrollToTopLink>
                </div>

                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:flex justify-between">
                    <span>
                        Copyright &copy; {new Date().getFullYear()}{" "}
                        <span className="uppercase font-bold"><ScrollToTopLink to="/">TYFORA.</ScrollToTopLink></span> All rights reserved.
                    </span>
                    <div className="space-x-4">
                        <ScrollToTopLink to="/terms-and-conditions" className="smooth-hover">
                            Terms & Conditions
                        </ScrollToTopLink>
                        <span>|</span>
                        <ScrollToTopLink to="/privacy-policy" className="smooth-hover">
                            Privacy Policy
                        </ScrollToTopLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;