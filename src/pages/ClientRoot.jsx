import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/header/Header';
const ClientRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default ClientRoot