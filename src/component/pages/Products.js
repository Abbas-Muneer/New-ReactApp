import React from "react";
import '../../App.css';
import Footer from "../Footer";
import ProductsCards from "../ProductsCard";

/*export default function Products(){
    return ;
}*/

function Products() {
    return (
        <>
            <h1 className="products"> PRODUCTS </h1>
            <ProductsCards />
            <Footer />

        </>
    );
}

export default Products;