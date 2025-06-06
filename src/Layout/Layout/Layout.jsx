import React from 'react';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import {Outlet} from "react-router";


const Layout  = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout ;