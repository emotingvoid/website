import React, { useState } from "react";

import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import Image from "next/image";

import { Arya } from "next/font/google";
import {Anek_Gurmukhi} from "next/font/google";

const arya = Arya({ subsets: ['latin'], weight: ["400", "700"] });
const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] })


import image from "@/assets/image.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"

const projects = [
    {
      title: "THE MONOCHROME HAVEN",
      year: "2024",
      type: "Residential",
      image: image // Replace with actual image paths
    },
    {
      title: "SLEEK SLOPES",
      year: "2024",
      type: "Residential",
      image: image5
    },
    {
      title: "THE PARALLEL THOUGHT",
      year: "2023",
      type: "Residential",
      image: image2
    },
    {
      title: "THE BLUE LEDGE",
      year: "2024",
      type: "Residential",
      image: image3
    },
    {
      title: "THE PUZZLE",
      year: "2023",
      type: "Institutional",
      image: image4
    }
  ];

export const Projects = ({isMobile}) => {
    const [currentProject, setCurrentProject] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const nextProject = () => {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentProject((prevIndex) => (prevIndex + 1) % projects.length);
            setIsTransitioning(false);
          }, 500); // Duration of the transition
        }
      };
    
      const prevProject = () => {
        if (!isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentProject((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
            setIsTransitioning(false);
          }, 500); // Duration of the transition
        }
      };

    return (
        <div className="relative h-[80vh] md:h-screen bg-white md:bg-[#33383D] flex flex-col items-center justify-center text-center text-[#D9CAB3]" id="projects">
            <div className="w-full mb-10 md:hidden">
            <svg className="hidden md:block w-full h-auto" viewBox="0 0 429 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1441 46.876C12.0121 46.876 7.4618 45.0023 4.49314 41.255C1.57314 37.459 0.113137 31.5947 0.113137 23.662C0.113137 15.632 1.57314 9.74333 4.49314 5.996C7.41314 2.24867 11.9635 0.375 18.1441 0.375C24.3735 0.375 28.9481 2.273 31.8681 6.069C34.7881 9.81633 36.2481 15.6807 36.2481 23.662C36.2481 31.5947 34.7638 37.459 31.7951 41.255C28.8751 45.0023 24.3248 46.876 18.1441 46.876ZM18.1441 43.737C21.7455 43.737 24.4221 42.1067 26.1741 38.846C27.9261 35.5367 28.8021 30.4753 28.8021 23.662C28.8021 16.7513 27.9261 11.6657 26.1741 8.405C24.4221 5.09567 21.7455 3.441 18.1441 3.441C14.5428 3.441 11.8661 5.07133 10.1141 8.332C8.4108 11.5927 7.55914 16.7027 7.55914 23.662C7.55914 30.5727 8.4108 35.6583 10.1141 38.919C11.8661 42.131 14.5428 43.737 18.1441 43.737ZM77.9773 31.181C77.9773 34.9283 77.1743 37.9943 75.5683 40.379C74.011 42.715 72.0157 44.394 69.5823 45.416C67.1977 46.3893 64.667 46.876 61.9903 46.876C57.1723 46.876 53.1573 45.6837 49.9453 43.299C46.782 40.8657 45.2003 36.8263 45.2003 31.181V1.251H52.6463V31.181C52.6463 35.3663 53.5223 38.4323 55.2743 40.379C57.075 42.277 59.484 43.226 62.5013 43.226C65.616 43.226 68.244 42.2527 70.3853 40.306C72.5753 38.3107 73.6703 35.269 73.6703 31.181V1.251H77.9773V31.181ZM120.236 46H112.206L105.928 30.451C105.344 29.0397 104.614 28.115 103.738 27.677C102.911 27.1903 101.621 26.947 99.8693 26.947H96.4383V46H88.9923V1.251H103.957C109.262 1.251 112.985 2.565 115.126 5.193C117.268 7.77233 118.338 10.9113 118.338 14.61C118.338 17.3353 117.681 19.7687 116.367 21.91C115.102 24.0027 112.888 25.4627 109.724 26.29C111.476 26.9227 112.742 28.0907 113.52 29.794L120.236 46ZM103.154 24.246C105.782 24.246 107.729 23.3213 108.994 21.472C110.26 19.574 110.892 17.2867 110.892 14.61C110.892 11.6413 110.26 9.135 108.994 7.091C107.729 5.047 105.782 4.025 103.154 4.025H96.4383V24.246H103.154ZM161.126 1.251C166.285 1.251 169.935 2.58933 172.076 5.266C174.217 7.894 175.288 11.325 175.288 15.559C175.288 19.793 174.217 23.224 172.076 25.852C169.935 28.48 166.285 29.794 161.126 29.794H153.826V46H146.38V1.251H161.126ZM160.104 27.166C162.781 27.166 164.727 26.144 165.944 24.1C167.209 22.056 167.842 19.209 167.842 15.559C167.842 11.9577 167.209 9.135 165.944 7.091C164.727 5.047 162.781 4.025 160.104 4.025H153.826V27.166H160.104ZM214.124 46H206.094L199.816 30.451C199.232 29.0397 198.502 28.115 197.626 27.677C196.799 27.1903 195.509 26.947 193.757 26.947H190.326V46H182.88V1.251H197.845C203.15 1.251 206.873 2.565 209.014 5.193C211.155 7.77233 212.226 10.9113 212.226 14.61C212.226 17.3353 211.569 19.7687 210.255 21.91C208.99 24.0027 206.775 25.4627 203.612 26.29C205.364 26.9227 206.629 28.0907 207.408 29.794L214.124 46ZM197.042 24.246C199.67 24.246 201.617 23.3213 202.882 21.472C204.147 19.574 204.78 17.2867 204.78 14.61C204.78 11.6413 204.147 9.135 202.882 7.091C201.617 5.047 199.67 4.025 197.042 4.025H190.326V24.246H197.042ZM238.855 46.876C232.723 46.876 228.173 45.0023 225.204 41.255C222.284 37.459 220.824 31.5947 220.824 23.662C220.824 15.632 222.284 9.74333 225.204 5.996C228.124 2.24867 232.674 0.375 238.855 0.375C245.084 0.375 249.659 2.273 252.579 6.069C255.499 9.81633 256.959 15.6807 256.959 23.662C256.959 31.5947 255.475 37.459 252.506 41.255C249.586 45.0023 245.036 46.876 238.855 46.876ZM238.855 43.737C242.456 43.737 245.133 42.1067 246.885 38.846C248.637 35.5367 249.513 30.4753 249.513 23.662C249.513 16.7513 248.637 11.6657 246.885 8.405C245.133 5.09567 242.456 3.441 238.855 3.441C235.254 3.441 232.577 5.07133 230.825 8.332C229.122 11.5927 228.27 16.7027 228.27 23.662C228.27 30.5727 229.122 35.6583 230.825 38.919C232.577 42.131 235.254 43.737 238.855 43.737ZM285.11 34.758C285.11 37.3373 284.843 39.4787 284.307 41.182C283.772 42.8853 282.58 44.2723 280.73 45.343C278.93 46.365 276.204 46.876 272.554 46.876C269.099 46.876 266.544 46.3163 264.889 45.197C263.283 44.0777 262.261 42.642 261.823 40.89C261.385 39.0893 261.166 36.6803 261.166 33.663H267.736C267.736 37.3617 268.077 39.9653 268.758 41.474C269.488 42.9827 270.827 43.737 272.773 43.737C274.671 43.737 275.961 43.08 276.642 41.766C277.324 40.4033 277.664 38.0673 277.664 34.758V1.251H285.11V34.758ZM322.291 42.277V46H296.23V1.251H320.977V4.974H303.676V21.253H319.444V25.122H303.676V42.277H322.291ZM354.683 13.442C354.099 6.77467 351.252 3.441 346.142 3.441C343.368 3.441 341.226 4.171 339.718 5.631C338.209 7.091 337.163 9.25667 336.579 12.128C335.995 14.9993 335.703 18.844 335.703 23.662C335.703 28.4313 335.995 32.2517 336.579 35.123C337.163 37.9457 338.209 40.087 339.718 41.547C341.226 43.007 343.368 43.737 346.142 43.737C349.208 43.737 351.398 42.715 352.712 40.671C354.074 38.5783 354.804 35.6583 354.902 31.911L360.961 32.13C360.571 36.9967 359.306 40.671 357.165 43.153C355.023 45.635 351.349 46.876 346.142 46.876C341.567 46.876 337.966 46 335.338 44.248C332.71 42.4473 330.86 39.868 329.79 36.51C328.768 33.152 328.257 28.8693 328.257 23.662C328.257 18.4547 328.768 14.172 329.79 10.814C330.86 7.40733 332.685 4.828 335.265 3.076C337.893 1.27533 341.518 0.375 346.142 0.375C351.057 0.375 354.585 1.397 356.727 3.441C358.868 5.43633 360.182 8.405 360.669 12.347L354.683 13.442ZM394.343 1.251V4.974H382.517V46H375.071V4.974H363.099V1.251H394.343ZM413.088 0.375C417.663 0.375 421.191 1.47 423.673 3.66C426.155 5.80133 427.688 9.11067 428.272 13.588L422.213 14.391C421.97 10.887 421.045 8.186 419.439 6.288C417.882 4.39 415.765 3.441 413.088 3.441C410.217 3.441 408.003 4.14667 406.445 5.558C404.937 6.92067 404.182 8.86733 404.182 11.398C404.182 13.734 404.791 15.5103 406.007 16.727C407.273 17.895 409.511 18.8927 412.723 19.72L416.738 20.742C421.07 21.9587 424.136 23.5647 425.936 25.56C427.737 27.5553 428.637 30.3293 428.637 33.882C428.637 38.0673 427.275 41.2793 424.549 43.518C421.824 45.7567 417.931 46.876 412.869 46.876C408.051 46.876 404.353 45.8053 401.773 43.664C399.243 41.474 397.71 38.1403 397.174 33.663L403.087 32.787C403.477 36.291 404.499 38.992 406.153 40.89C407.808 42.788 410.047 43.737 412.869 43.737C419.196 43.737 422.359 41.0603 422.359 35.707C422.359 34.101 422.092 32.8113 421.556 31.838C421.021 30.8647 420.121 30.0617 418.855 29.429C417.639 28.7477 415.838 28.115 413.453 27.531L409.73 26.582C405.399 25.4627 402.357 23.9053 400.605 21.91C398.902 19.866 398.05 16.9947 398.05 13.296C398.05 9.062 399.316 5.85 401.846 3.66C404.426 1.47 408.173 0.375 413.088 0.375Z" fill="#33383D" fillOpacity="0.85"/>
            </svg>
            <h1 className={`${arya.className} text-3xl md:hidden text-[#BCA184]`} >OUR PROJECTS</h1>
            </div>
            <div className="flex items-center justify-center w-[80vw] mb-4">
                <SlArrowLeftCircle onClick={prevProject} className="text-[40px] text-[#D9CAB3] mr-10 cursor-pointer"/>
                <div className="flex flex-col md:flex-row w-full relative items-center">
                  <div className={`flex-shrink-0 flex justify-center w-full md:w-1/2 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                      <Image width={0} height={0} style={{width:'auto', height: isMobile ? "auto" : "70vh"}} src={projects[currentProject].image} alt={projects[currentProject].title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                  </div>
                  {/* <h2 className={`${arya.className} absolute bg-[#F5F5F5] text-[rgba(51,56,61,0.85)] w-[100vw] top-48 md:hidden text-xl md:text-4xl md:mb-4`}>{projects[currentProject].title}</h2> */}
                  <div className={`md:ml-10 md:w-1/2 hidden md:block text-left transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                      <h2 className={`${arya.className} hidden md:block text-sm md:text-4xl md:mb-4`}>{projects[currentProject].title}</h2>
                      <p className={`${anek.className} text-lg mb-2`}>Year - {projects[currentProject].year}</p>
                      <p className={`${anek.className} text-lg`}>Type - {projects[currentProject].type}</p>
                  </div>
                </div>
                <SlArrowRightCircle onClick={nextProject} className="text-[40px] text-[#D9CAB3] ml-10 cursor-pointer" />
            </div>
            <h2 className={`${arya.className} bg-[#F5F5F5] text-[rgba(51,56,61,0.85)] w-[100vw] top-48 md:hidden text-xl md:text-4xl md:mb-4`}>{projects[currentProject].title}</h2>
            <div className={`md:ml-10 md:w-1/2 flex flex-col justify-center text-center mt-5 transition-opacity duration-500 ease-in-out md:hidden ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <h2 className={`${arya.className} hidden md:block text-sm md:text-4xl md:mb-4`}>{projects[currentProject].title}</h2>
                <p className={`${anek.className} text-sm mb-1`}>Year - {projects[currentProject].year}</p>
                <p className={`${anek.className} text-sm`}>Type - {projects[currentProject].type}</p>
            </div>
            <div className="flex space-x-2 mt-4">
                {projects.map((_, index) => (
                <div
                    key={index}
                    className={`transition-all duration-300 ${currentProject === index ? 'w-6 h-2 bg-[#D9CAB3] rounded' : 'w-2 h-2 bg-[#D9CAB3] rounded-full'}`}
                />
                ))}
            </div>
        </div>
    )
}