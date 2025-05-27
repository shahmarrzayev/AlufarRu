import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const ClientRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ClientRoot