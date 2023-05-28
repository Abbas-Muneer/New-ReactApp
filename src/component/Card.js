import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Cards(){
    return(
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem src='images/img-9.jpg'
                       text="Explore the hidden waterfall deep inside the Amazon Jungle"
                       label="Adventure"
                       path="https://youtu.be/es4x5R-rV9s"/> 
                       <CardItem src='images/img-2.jpg'
                       text="Travel through the Islands of Bali in a Private Cruise"
                       label="Luxury"
                       path="https://youtu.be/VoWepqBuw3Y"/> 
                    </ul>
                    <ul className="cards__items">
                       <CardItem src='images/img-3 (1).jpg'
                       text="Set Sail in the Atlantic Ocean Visiting Uncharted Waters"
                       label="Mystery"
                       path="https://youtu.be/TiXOQn7z9Hg"/> 
                       <CardItem src='images/img-4 (1).jpg'
                       text="Experience Football on top of the Himalayan Mountains"
                       label="Adventure"
                       path="https://youtu.be/-hTVNidxg2s"/> 
                       <CardItem src='images/img-8.jpg'
                       text="Ride through the Sahara Desert on a guided camel tour"
                       label="Adrenaline"
                       path="https://youtu.be/3d9S1JpsvQM"/> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;