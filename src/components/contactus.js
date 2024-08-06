import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { useRouter } from "next/navigation";

import { Arya } from "next/font/google";
import {Anek_Gurmukhi} from "next/font/google";
const arya = Arya({ subsets: ['latin'], weight: ["400", "700"] });
const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] })

export const ContactUs = () => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center relative bg-[#F5F5F5]" id="contactus">
            <div className="flex flex-col items-center justify-center text-center py-0 md:py-20 h-[0vh] md:h-[60vh]">
                <h1 className={`${arya.className} hidden md:block text-xl md:text-7xl text-[#BCA184] mb-4`}>
                    Found the Space, but not the Designer? <br/>
                <div className={`${arya.className} mt-12 text-2xl md:text-7xl text-[#33383D]`}>
                    Connect with us...
                </div>
                </h1>
                <div onClick={() => router.push("https://cal.com/emotingvoid/let-s-begin-with-your-design-journey")} className={`${anek.className} hidden text-sm md:text-2xl w-[70vw] md:w-[40vw] cursor-pointer h-17 pt-3 pb-1 mt-10 px-0 border-2 text-[#33383D] border-solid border-[#33383D] bg-inherit hover:bg-[#33383D] transition duration-300 hover:text-[#BCA184] md:flex items-center justify-center`}>
                    BOOK YOUR FIRST CONSULTATION,<span className="font-bold">&nbsp;FREE!</span>
                </div>
            </div>
            <div className="bg-[#33383D] w-full py-5 md:py-10 px-4 md:px-40  text-white md:h-[36vh]">
                <h3 className={`${arya.className} hidden md:block text-4xl mb-6`}>
                    CONTACT US
                </h3>
                <h1 className={`${arya.className} md:hidden text-[#BCA184] text-3xl`}>
                    Let’s begin with your design journey?
                </h1>
                <div onClick={() => router.push("https://cal.com/emotingvoid/let-s-begin-with-your-design-journey")} className={`${anek.className} md:hidden text-sm md:text-2xl w-full md:w-[40vw] cursor-pointer h-17 pt-3 pb-2 mt-10 px-0 border-[1px] text-white border-solid border-white bg-inherit hover:border-[#BCA184] hover:bg-[#BCA184] transition duration-300 hover:text-[#33383D] flex items-center justify-center`}>
                    BOOK YOUR FIRST CONSULTATION, <span className="font-bold">&nbsp;FREE!</span>
                </div>
                <h1 className={`${arya.className} mt-12 md:hidden text-[#F5F5F5] text-4xl`}>
                    Connect with us...
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center w-full"> 
                    <div className="w-[100vw] px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
                        <div className="mt-6 md:mt-0">
                        <h3 className="font-semibold text-sm md:text-xl">Phone</h3>
                        <p className="text-xs md:text-sm">+91 8800-204-121, +91 8800-204-120</p>
                        </div>
                        <div>
                        <h3 className="font-semibold text-sm md:text-xl">Email</h3>
                        <p className="text-xs md:text-sm">design@emotingvoid.com</p>
                        </div>
                        <div className="w-full md:flex flex-col items-end hidden">
                            {/* <h4 className="font-semibold text-sm md:text-xl hidden md:block">Social</h4> */}
                            <div className="flex space-x-4">
                                <a href="https://instagram.com/emoting_void" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <FaInstagramSquare className="text-5xl md:text-3xl" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaSquareFacebook className="text-5xl md:text-3xl" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaLinkedin className="text-5xl md:text-3xl" />
                                </a>
                                <a href="https://wa.me/918800204121?text=Hi,%20I%am%20interested%20in%20your%20service." target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                                    <FaWhatsappSquare className="text-4xl md:text-3xl" />
                                </a>
                                <a href="mailto:design@emotingvoid.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                                    <BiLogoGmail className="text-4xl md:text-3xl" />
                                    </a>
                            </div>
                        </div>
                        <div>
                        <h3 className="font-semibold text-sm md:text-xl">Address</h3>
                        <p className="text-xs md:text-sm">988, Betina tower, Mahagun Moderne, Sector 78, Noida, Uttar Pradesh - 201301</p>
                        </div>
                    </div>
                    <div className="md:hidden space-y-4 md:ml-32 mt-10 flex flex-col justify-end w-full md:w-[20vw]">
                        <div className="w-full">
                            <h4 className="font-semibold text-sm md:text-xl hidden md:block">Social</h4>
                            <div className="flex space-x-4">
                                <a href="https://instagram.com/emoting_void" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                    <FaInstagramSquare className="text-4xl md:text-xl" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61551241550407" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaSquareFacebook className="text-4xl md:text-xl" />
                                </a>
                                <a href="https://linkedin.com/company/emoting-void" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaLinkedin className="text-4xl md:text-xl" />
                                </a>
                                <a href="https://wa.me/918800204121?text=Hi,%20I%am%20interested%20in%20your%20service." target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                                    <FaWhatsappSquare className="text-4xl md:text-xl" />
                                </a>
                                <a href="mailto:design@emotingvoid.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
                                    <BiLogoGmail className="text-4xl md:text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="my-[2vh] text-center bg-[#F5F5F5]">
                    <p className="text-xs">Copyright © 2024 Emoting Void LLP</p>
                </div>
            </div>
    )
}