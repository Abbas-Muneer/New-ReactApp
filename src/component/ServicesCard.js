import React from "react";
import ServicesCardItem from "./ServicesCardItem";
import "./ServicesCard.css";

function ServicesCards(){
    return(
        <div className="cards">
            <h1>The Services that we provide for Better Experience!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <ServicesCardItem src='images/img-11.jpg'
                       text="We give you the best transport available for our precious customers' best comfort"
                       path="/services"/> 
                    
                    </ul>
                    <ul className="cards__items">
                       <ServicesCardItem src='images/img-12.jpg'
                       text="No hassle planning out the trip when we have it figured it out for you!!"
                       path="/services"/> 
                    </ul>
                    <ul className="cards__items">
                       <ServicesCardItem src='images/img-13.jpg'
                       text="We provide you with different packages of trips to choose from!!"
                       path="/services"/> 
                    </ul>
                    <ul className="cards__items">
                       <ServicesCardItem src='images/img-14.jpg'
                       text="Special discounts given for newly wed couples on their Honeymoon!!"
                       path="/services"/> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ServicesCards;