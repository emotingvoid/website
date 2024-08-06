import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import React, { useState, useEffect } from 'react';
import { Arya } from "next/font/google";
import { Anek_Gurmukhi } from "next/font/google";
import { useSwipeable } from 'react-swipeable';

const arya = Arya({ subsets: ['latin'], weight: ["400", "700"] });
const anek = Anek_Gurmukhi({ subsets: ['latin'], weight: ["400", "700"] });

const testimonials = [
    {
        text: "We couldn't be happier with our new home design. The team captured our vision perfectly and delivered beyond our expectations. Highly recommended!",
        author: 'Vivek & Sheetal',
    },
    {
        text: "Professional, creative, and dedicated – the best interior design service we've experienced. Our home feels like a dream now!",
        author: 'Avinash & Sweta',
    },
    {
        text: "Exceptional service and stunning designs! Our office space has transformed into a modern and functional environment. Thank you!",
        author: 'Divya',
    },
    {
        text: "From concept to completion, the process was smooth and enjoyable. The team’s attention to detail is unparalleled.",
        author: 'Ashmita',
    },
    {
        text: "Our renovated home is now a beautiful blend of comfort and sophistication, thanks to their expert design and execution.",
        author: 'Bikash & Ritu',
    },
];

export const Testimonials = ({ isMobile }) => {

    const [currTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextTestimonial();
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }, []);

    const getVisibleTestimonials = () => {
        const visibleTestimonials = [];
        for (let i = 0; i < (isMobile ? 1 : 3); i++) {
            visibleTestimonials.push(testimonials[(currTestimonial + i) % testimonials.length]);
        }
        return visibleTestimonials;
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextTestimonial,
        onSwipedRight: prevTestimonial,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="relative h-[70vh] bg-[#F6F6F6] flex flex-col items-center justify-center text-center text-[#33383D]" {...handlers}>
            <h1 className={`${arya.className} hidden md:block text-3xl md:text-5xl mb-20 text-[#BCA184]`}>
                WHAT OUR <span className="text-[#33383D]">CLIENTS</span> SAYS ABOUT US?
            </h1>
            <h1 className={`${arya.className} md:hidden text-3xl md:text-5xl text-[#33383D] mb-10`}>
                OUR CLIENTS ARE SAYING
            </h1>
            <div className="flex items-center justify-center w-full relative">
                <SlArrowLeftCircle onClick={prevTestimonial} className="hidden md:block text-4xl text-[#33383D] mr-10 cursor-pointer" />
                <div className="flex space-x-8">
                    {getVisibleTestimonials().map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[70vw] h-[90vw] md:w-[20vw] md:h-[20vw] flex flex-col justify-between p-6 border-2 border-[#33383D] transition-opacity duration-500 ease-in-out transform opacity-100"
                        >
                            <div className="flex justify-center mb-5">
                                <svg width="39" height="28" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.7902 28C25.7236 28 23.8902 27.3 22.2902 25.9C20.7569 24.4333 19.9902 22.4 19.9902 19.8C19.9902 15.2667 21.4569 11.2667 24.3902 7.8C27.3236 4.26666 31.8902 1.86666 38.0902 0.599995L37.6902 4.79999C34.3569 5.53333 31.8236 6.63333 30.0902 8.09999C28.3569 9.5 27.4902 11.2 27.4902 13.2C27.4902 14.0667 27.8236 14.8 28.4902 15.4C29.1569 15.9333 29.8902 16.4667 30.6902 17C31.5569 17.5333 32.3236 18.2 32.9902 19C33.6569 19.7333 33.9902 20.7667 33.9902 22.1C33.9902 24.0333 33.3902 25.5 32.1902 26.5C30.9902 27.5 29.5236 28 27.7902 28ZM7.79024 28C5.72357 28 3.89024 27.3 2.29023 25.9C0.756902 24.4333 -0.00976521 22.4 -0.00976521 19.8C-0.00976521 15.2667 1.4569 11.2667 4.39023 7.8C7.32357 4.26666 11.8902 1.86666 18.0902 0.599995L17.6902 4.79999C14.3569 5.53333 11.8236 6.63333 10.0902 8.09999C8.3569 9.5 7.49024 11.2 7.49024 13.2C7.49024 14.0667 7.82357 14.8 8.49024 15.4C9.1569 15.9333 9.89023 16.4667 10.6902 17C11.5569 17.5333 12.3236 18.2 12.9902 19C13.6569 19.7333 13.9902 20.7667 13.9902 22.1C13.9902 24.0333 13.3902 25.5 12.1902 26.5C10.9902 27.5 9.52357 28 7.79024 28Z" fill="#33383D" />
                                </svg>
                            </div>
                            <p className={`${anek.className} mb-4 justify-center`}>{testimonial.text}</p>
                            <p className="font-semibold">- {testimonial.author}</p>
                            <div className="flex justify-center mt-5">
                                <svg width="39" height="28" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2098 2.74181e-06C13.2764 2.74181e-06 15.1098 0.700003 16.7098 2.1C18.2431 3.56667 19.0098 5.6 19.0098 8.2C19.0098 12.7333 17.5431 16.7333 14.6098 20.2C11.6764 23.7333 7.10976 26.1333 0.909763 27.4L1.30976 23.2C4.6431 22.4667 7.17643 21.3667 8.90976 19.9C10.6431 18.5 11.5098 16.8 11.5098 14.8C11.5098 13.9333 11.1764 13.2 10.5098 12.6C9.8431 12.0667 9.10976 11.5333 8.30976 11C7.4431 10.4667 6.67643 9.8 6.00976 9C5.3431 8.26667 5.00976 7.23334 5.00976 5.9C5.00976 3.96667 5.60976 2.5 6.80976 1.5C8.00976 0.500002 9.47643 2.74181e-06 11.2098 2.74181e-06ZM31.2098 2.74181e-06C33.2764 2.74181e-06 35.1098 0.700003 36.7098 2.1C38.2431 3.56667 39.0098 5.6 39.0098 8.2C39.0098 12.7333 37.5431 16.7333 34.6098 20.2C31.6764 23.7333 27.1098 26.1333 20.9098 27.4L21.3098 23.2C24.6431 22.4667 27.1764 21.3667 28.9098 19.9C30.6431 18.5 31.5098 16.8 31.5098 14.8C31.5098 13.9333 31.1764 13.2 30.5098 12.6C29.8431 12.0667 29.1098 11.5333 28.3098 11C27.4431 10.4667 26.6764 9.8 26.0098 9C25.3431 8.26667 25.0098 7.23334 25.0098 5.9C25.0098 3.96667 25.6098 2.5 26.8098 1.5C28.0098 0.500002 29.4764 2.74181e-06 31.2098 2.74181e-06Z" fill="#33383D" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
                <SlArrowRightCircle onClick={nextTestimonial} className="hidden md:block text-4xl text-[#33383D] ml-10 cursor-pointer" />
            </div>
            <div className="flex space-x-2 mt-4">
                {testimonials.map((_, index) => (
                <div
                    key={index}
                    className={`transition-all duration-300 ${currTestimonial === index ? 'w-6 h-2 bg-[#D9CAB3] rounded' : 'w-2 h-2 bg-[#D9CAB3] rounded-full'}`}
                />
                ))}
            </div>
        </div>
    )
};
