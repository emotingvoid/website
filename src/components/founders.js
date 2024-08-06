
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";

import { Arya } from "next/font/google";
import {Anek_Gurmukhi} from "next/font/google";
const arya = Arya({ subsets: ['latin'], weight: ["400", "700"] });
const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] })

import Anish from "@/assets/ANISH.jpg"
import Ayushi from "@/assets/AYUSHI.jpg"
import Mohit from "@/assets/MOHIT.jpg"

export const Founders = ({ isMobile }) => {
    return (
        <div className="relative h-screen bg-[#F5F5F5] flex flex-col items-center text-center text-[#BCA184] justify-evenly" id="aboutus">
            <div className="flex flex-col items-center">
                <h1 className={`${arya.className} text-3xl md:text-5xl`}>
                    MEET THE FOUNDERS 
                </h1>
                <p className={`${anek.className} text-xs md:text-sm mx-4 md:mx-64 mt-10 justify-last-center text-[#33383D]`}>
                We are three Founding partners of EMOTING VOID, bonded 
                by our shared education in design and a common interest 
                for blending science, technology, craftsmanship, and 
                art. Our similar interests lay the groundwork for our 
                collaboration, while our distinct strengths as designers 
                add depth and breadth to our collective capabilities. As 
                a team, we’re an embodiment of balance, ready to tackle 
                any challenge, whether it’s on the bustling streets of 
                Mumbai or the serene landscapes of Assam. Our journey 
                has taken us through diverse studios in Bengaluru, Punjab, 
                Noida, and beyond, where we’ve gathered a wealth of 
                practical experience. Now, we’ve come together to address 
                design problems in our unique way, applying our shared 
                knowledge and individual talents to create spaces that 
                are not just functional but also tells a story.
                </p>
            </div>
            <div className="flex justify-around w-full">
                <div className="relative flex h-[30vh] md:h-[25vw] shadow-lg">
                    <div className="relative h-full group" style={{ width: `${isMobile ? 'calc((30vh / 2191) * 1155)' : 'calc((25vw / 2191) * 1155)'}` }}>
                        <Image
                            alt="Anish"
                            src={Anish}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                            <p className="font-semibold">Anish Batta</p>
                            <div className="flex flex-row space-x-4 mt-2">
                                <a href="https://www.linkedin.com/in/anish-batta-ab568a53/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a href="https://www.instagram.com/anish_10_1" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <RiInstagramFill className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full group" style={{ width: `${isMobile ? 'calc((30vh / 2191) * 1014)' : 'calc((25vw / 2191) * 1014)'}` }}>
                        <Image
                        alt="Ayushi"
                        src={Ayushi}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <p className="font-semibold">Ayushi Dhanuka</p>
                        <div className="flex flex-row space-x-4 mt-2">
                            <a href="https://www.linkedin.com/in/ayushi-dhanuka/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://instagram.com/ayushi__dhanuka/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                <RiInstagramFill className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative h-full group" style={{ width: `${isMobile ? 'calc((30vh / 2191) * 1083)' : 'calc((25vw / 2191) * 1083)'}` }}>
                    <Image
                        alt="Mohit"
                        src={Mohit}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                        <p className="font-semibold">Mohit Solanki</p>
                        <div className="flex flex-row space-x-4 mt-2">
                            <a href="https://linkedin.com/in/mohit-solanki-m19/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://instagram.com/mr.mxhit" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                <RiInstagramFill className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
