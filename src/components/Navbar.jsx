import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    // Prevent multiple script additions
    if (!document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']")) {
      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }

    // Prevent re-initialization
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "hi,mr,ta,te,bn,gu,pa,kn,ml,en", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
          "google_translate_element"
        );
      };
    }
  }, []);
  return (
    <>
      <div className="h-[10vh] bg-green-700 w-full flex  absolute">
        <div className="w-[12%] bg-yellow-50">
          <img src="public\logo.png" className="pl-3 w-[5vw] h-[4.5vw]" alt="logo" />
        </div>
        <div className="flex text-amber-500 w-[88%] font-semibold">
          <ul className="flex space-x-12 justify-center items-center w-full ">
            <Link to="/home">
              <li className="">
                Home
              </li>
            </Link>
            
            <Link to="/home">
              <li className="">
                WeedObot
              </li>
            </Link>
            <Link to="/home">
              <li className="">
                My Farm & Bot
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Weed & Crop Information
              </li>
            </Link>
            <Link to="/weed-herbicide-guide">
              <li className="">
              Herbicide Guide
              </li>
            </Link>
            
            <Link to="/home">
              <li className="">
              Govt. Guidelines
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Farmer Stories
              </li>
            </Link>
            <Link to="/home">
              <li className="">
              Support
              </li>
            </Link>
          </ul>
          <div id="google_translate_element" className="w-[12%] flex justify-center"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
