import Header from '@app/components/navbar/Header';
import Jumbotron from '@app/Features/Jumbotron';
import ProjectHistory from '@app/Features/ProjectHistory';
import Tools from '@app/Features/Tools';
import React from 'react';
export default function HomePage() {
  return(
    <>
      <section style={{backgroundColor: "#F5F5F5", borderRadius: "0 0 4.28571rem 4.28571rem", paddingBottom: "4.64286rem"}}>
        <Header />
        <Jumbotron />
      </section>
      <section style={{backgroundColor: "#F5F5F5"}}>
        <div className='flex justify-center' style={{backgroundColor: "#FFFFFF", borderRadius: "0 0 4.28571rem 4.28571rem", paddingBlock: "4.64286rem"}}>
          <Tools />
        </div>
      </section>
      <section style={{backgroundColor: "#F5F5F5", borderRadius: "0 0 4.28571rem 4.28571rem", paddingBlock: "4.64286rem"}}>
        <ProjectHistory />
      </section>
    </>
  )
}