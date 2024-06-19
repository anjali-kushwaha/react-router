import React from 'react'
import MainNavigation from "../components/MainNavigation";
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <MainNavigation/>
      <main>
      {/* Outlet :-- tells where is the child component render */}
        <Outlet/>
      </main>
    </>
  )
}

export default Root
