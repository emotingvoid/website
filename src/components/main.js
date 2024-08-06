import { Arya } from "next/font/google";
import {Anek_Gurmukhi} from "next/font/google";

import { useRouter } from "next/navigation";

const arya = Arya({ subsets: ['latin'], weight: ["400", "700"] });
const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] })

export const Mainpage = () => {
  const router = useRouter()
    return(
        <div className="top-0 left-0 w-full md:w-[40%] bg-[rgba(51,56,61,0)] md:bg-[rgba(51,56,61,0.85)] h-[50vh] md:h-screen z-[-40]" id="mainpage">
        <div className="fixed top-[20vh] h-[80%] hidden md:flex flex-col justify-center items-start">
          <h1 className={`${arya.className} text-4xl text-left ml-10 text-[#BCA184] md:text-6xl h-[50%]`}>
            GET YOUR DREAM<br/>SPACE, <span className="text-white">DESIGNED</span> <br/> WITH US!
          </h1>
          <h2 className={`${anek.className} text-[#BCA184] hover:text-[#33383D] hover:bg-[#BCA184] text-xl border-2 w-[50%] focus:pointer-events-auto hover:border-[rgba(51, 56, 61, 0.85)] border-solid border-[#BCA184] ml-10 flex items-center justify-center p-2 cursor-pointer`}>
            <span className="mt-1.5" onClick={() => router.push("https://cal.com/emotingvoid/let-s-begin-with-your-design-journey")}>
              BOOK A CONSULTATION
            </span>
          </h2>
        </div>
      </div>
    )
}