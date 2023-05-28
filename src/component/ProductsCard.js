import React from "react";
import ProductsCardItem from "./ProductsCardItem";
import "./ProductsCard.css";

function ProductsCards(){
    return(
        <div className="cards">
            <h1>Check out our products that we offer you!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <ProductsCardItem src='images/img-15.jpg'
                       text="The essentials that you need for a great Hiking. Starting from $20."
                       label="Hiking Essentials"
                       path="https://www.camp.it/d/ot/de/outdoor"/> 
                       <ProductsCardItem src='images/img-16.jpg'
                       text="High durable and best quality luggages starting from $50."
                       label="Luggages"
                       path="https://www.zara.com/uk/en/man-bags-travel-l584.html"/>   
                       <ProductsCardItem src='images/img-17.jpg'
                       text="Shoes are the best partner of your life. Choose them wisely. Starting from $35."
                       label="Shoes"
                       path="https://www.zara.com/us/en/man-shoes-l769.html"/> 
                       <ProductsCardItem src='images/img-18.jpg'
                       text="Our own designed T-Shirts right for you. Starting from $15."
                       label="T-Shirts"
                       path="https://www.zara.com/us/en/man-tshirts-l855.html"/> 
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <ProductsCardItem src='images/img-19.jpg'
                       text="Explore our Shirt collections from Hawaai based to Canada Styled. Starting from $20."
                       label="Shirts"
                       path="https://www.zara.com/us/en/man-shirts-l737.html"/> 
                       <ProductsCardItem src='images/img-20.jpg'
                       text="Best Quality Jackets & Sweaters to help you on your coldest journeys. Starting from $50."
                       label="Sweaters & Jackets"
                       path="https://www.zara.com/in/en/man-knitwear-sweaters-l701.html"/>   
                       <ProductsCardItem src='images/img-21.jpg'
                       text="The right backpack is the right friend throughout your journey. Starting from $35."
                       label="Backpacks"
                       path="https://www.zara.com/uk/en/man-bags-backpacks-l565.html"/> 
                       <ProductsCardItem src='images/img-22.jpg'
                       text="Choose the other essential needs for your next vacation with us."
                       label="Other Essentials"
                       path="https://www.zara.com/uk/"/> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductsCards;