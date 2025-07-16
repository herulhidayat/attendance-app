import Header from "@app/components/navbar/Header";
import MenuFooter from "@app/components/navbar/MenuFooter";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return(
    <>
      <section>
        <Header />
      </section>

      <Outlet />
      
      <section className="fixed bottom-0 max-md:visible md:invisible w-full">
        <MenuFooter />
      </section>
    </>
  )
}