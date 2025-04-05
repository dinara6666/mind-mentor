import React from 'react';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Outlet = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Outlet;