import React from "react";
import '../../App.css';
import Footer from "../Footer";
import ServicesCards from "../ServicesCard";

function Services() {
    return (
        <>
            <h1 className="services"> Services </h1>
            <ServicesCards/>
            <Footer />

        </>
    );
}

export default Services;