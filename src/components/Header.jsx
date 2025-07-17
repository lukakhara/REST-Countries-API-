import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-between shadow-lg
                    py-6 px-4 sm:px-10 md:px-12 xl:px-18 text-text  ">
      <h1 className="fontBoldest xl:text-xl ">Where in the world?</h1>
      <button className="fontBold  cursor-pointer"
              onClick={() => {
                setDarkMode(!darkMode);
              }}>
         <FontAwesomeIcon icon={faMoon} className="pr-1" /> Dark Mode
      </button>
    </div>
  );
};

export default Header;
