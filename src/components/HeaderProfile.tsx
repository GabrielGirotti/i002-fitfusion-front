import { useState } from "react";
import { Configuration } from "./";
import { CloseButtonProfileSVG, ColonSVG, ConfigurationToolSVG, LeftArrowSVG } from "../icons";

type HeaderProfilePropsTypes = {
  closeButton : boolean
  text : string 
  showConfig : boolean
}
export const HeaderProfile = ({closeButton , text = 'Mi perfil' , showConfig} : HeaderProfilePropsTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex flex-row w-full justify-between items-center pt-14 px-6">
      <button className=" min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer">
         { closeButton ? <CloseButtonProfileSVG /> : <LeftArrowSVG />} 
      </button>

      <p className="font-bold text-base text-black font-lato">{ text }</p>
      
      <button
        className="min-h-14 min-w-14 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer"
        onClick={toggleMenu}
      >
        { showConfig ? <ConfigurationToolSVG /> : <ColonSVG className="text-black" /> }
        
        
      </button>

      <nav
        className={`${
          !isOpen ? "h-0" : "h-[100%]"
        } fixed top-0 left-0 bottom-0  justify-center items-center bg-white z-50 overflow-hidden origin-top duration-700 w-[100vw]`}
      >
        <Configuration toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default HeaderProfile;
