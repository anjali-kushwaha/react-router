import React from 'react';
import MainNavigation from "../components/MainNavigation";
import { Outlet } from 'react-router-dom';

function EventsRoot() {
  return (
    <>
      
      <MainNavigation/>
      {/* Outlet :-- tells where is the child component render */}
        <Outlet/>
    </>
  )
}

export default EventsRoot
