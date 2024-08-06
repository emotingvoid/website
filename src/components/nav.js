import { useState, useEffect } from 'react';
import Image from "next/image";
import { Anek_Gurmukhi } from "next/font/google";
import logo from "@/assets/evlogo.svg";
import logoBeige from "@/assets/evlogo-beige.svg";
import background from "@/assets/ev.png";

import { useRouter } from 'next/navigation';

import mobilebg from "@/assets/mobilemain.png"
import { GoBook } from "react-icons/go";

import "../app/globals.css"

const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] });

export const Nav = ( {isMobile}) => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > ((window.innerHeight) * (0.8))) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const scrollTo = (id) => {
    const contactUsSection = document.getElementById(id);
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Image 
        src={isMobile ? mobilebg :background} alt="background"
        className="h-[50vh] w-full object-cover md:h-screen fixed top-0 z-[-50]"
      />
      <div className={`${anek.className} h-[10vh]  md:h-[7vh] ${isSticky ? 'fixed top-0 left-0 w-full bg-[rgba(51,56,61,1)] md:bg-[rgba(188,161,132,1)] shadow-lg' : 'mt-0 md:mt-12 fixed w-full md:w-[95%] left-1/2 md:transform -translate-x-1/2 bg-[rgba(51,56,61,0.85)] md:bg-[rgba(188,161,132,0.7)]'} z-50 md:transition-all md:duration-500 flex flex-row items-center justify-between`}>
        <Image onClick={() => router.push('/')} src={isMobile ? logoBeige : logo} alt="logo" className="h-1/2 md:h-4/5 w-fit md:w-[20%] ml-5 cursor-pointer" />
        <ul className="hidden md:flex flex-row justify-center text-white text-xl mt-2">
          <li className="mr-12 cursor-pointer" onClick={() => scrollTo("aboutus")}>ABOUT US</li>
          <li className="mr-12 cursor-pointer" onClick={() => scrollTo("projects")}>PROJECTS</li>
          <li className="mr-12 cursor-pointer" onClick={() => scrollTo("services") }>SERVICES</li>
          <GoBook onClick={() => router.push("https://work.emotingvoid.com/flipbook")} className="text-white h-[70%] w-auto cursor-pointer" />
        </ul>


        <span onClick={() => scrollTo("contactus")} className="text-[#BCA184] md:bg-[#33383D] md:border-2 border-[#BCA184] border-[1px] md:border-[#33383D] cursor-pointer text-xs md:text-xl w-24 md:w-40 h-[40%] md:h-3/6 mr-4 flex items-center justify-center pt-1 md:pt-2">
          CONTACT US
        </span>
      </div>
    </div>
  );
};
