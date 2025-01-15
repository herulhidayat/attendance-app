import Header from '@app/components/navbar/Header';
import AboutMe from '@app/Features/AboutMe';
import Experienced from '@app/Features/Experienced';
import Jumbotron from '@app/Features/Jumbotron';
import ProjectHistory from '@app/Features/ProjectHistory';
import Tools from '@app/Features/Tools';
import { DFlex, DFlexJustifyCenter } from '@app/styled/flex.styled';
import React, { useEffect, useState } from 'react';
export default function HomePage() {
  const [navbarBlur, setNavbarBlur] = useState<boolean>(false)
  const [navState, setNavState] = useState<string>("")

  const handleScroll = () => {
    const newScrollYPosition = window.scrollY;
    if(newScrollYPosition > 30) {
      setNavbarBlur(true)
    } else {
      setNavbarBlur(false)
    }
    
    if(newScrollYPosition >= 1030 && newScrollYPosition < 1670) {
      setNavState("works")
    } else if(newScrollYPosition >= 1670 && newScrollYPosition < 1922) {
      setNavState("experiences")
    } else if(newScrollYPosition >= 1922) {
      setNavState("info")
    } else {
      setNavState("")
    }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  return(
    <>
      <section className={`sticky top-0 w-full z-50 ${navbarBlur ? "backdrop-blur-md" : "bg-[#F5F5F5]"}`}>
        <Header className={navbarBlur ? "py-2" : "py-8"} navState={navState}/>
      </section>
      <section className='bg-[#F5F5F5] rounded-b-[4.28571rem] pb-[4.64286rem]'>
        <Jumbotron />
      </section>
      <section className='bg-[#F5F5F5]'>
        <div className='flex justify-center bg-white rounded-b-[4.28571rem] py-[4.64286rem]'>
          <Tools />
        </div>
      </section>
      <section id="works" className='bg-[#F5F5F5] rounded-b-[4.28571rem] py-[4.64286rem]'>
        <ProjectHistory />
      </section>
      <section id="experiences" className='bg-[#F5F5F5]'>
        <div className='flex justify-center bg-white rounded-b-[4.28571rem] py-[4.64286rem]'>
          <Experienced />
        </div>
      </section>
      <section id="info" className='bg-[#F5F5F5] rounded-b-[4.28571rem] py-[4.64286rem]'>
        <AboutMe />
      </section>
      <section className='bg-white'>
        <DFlexJustifyCenter className='py-9'>
          <p className='text-center text-slate-400'>© 2025 Khairul Hidayat</p>
        </DFlexJustifyCenter>
      </section>
    </>
  )
}