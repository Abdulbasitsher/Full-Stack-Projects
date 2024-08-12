import React from 'react';
import Header from './compnents/header/Header';
import Footer from './compnents/footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )


}
export default Layout; 