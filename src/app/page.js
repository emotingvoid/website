"use client";
import {useState, useEffect} from "react";
import "./globals.css"
import { Nav } from "@/components/nav"
import { Mainpage } from "@/components/main"

import { SimplifiedProcess } from "@/components/simplifiedprocess";
import { ServingBest } from "@/components/servingthebest";
import { Projects } from "@/components/projects";
import { Founders } from "@/components/founders";
import { Testimonials } from '@/components/testimonials';
import { WhyWorkWithUs } from '@/components/workwithus';
import { ContactUs } from "@/components/contactus";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Nav isMobile={isMobile} />
      <Mainpage />
      {
        isMobile? <>
            <WhyWorkWithUs />
            <SimplifiedProcess />
            <ServingBest isMobile={isMobile} />
            <Projects isMobile={isMobile} />
            <Testimonials isMobile={isMobile} />
            <Founders isMobile={isMobile} />
            <ContactUs />
          </> : 
          <>
            <SimplifiedProcess />
            <ServingBest />
            <Projects />
            <Founders />
            <Testimonials />
            <WhyWorkWithUs />
            <ContactUs />
          </>
      }
    

    </>
  );
}
