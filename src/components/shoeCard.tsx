import React from "react";
import { Sneaker } from "../interfaces/sneaker";

interface shoeCardProp {
    sneaker: Sneaker;
}

export function shoeCard({ sneaker }: shoeCardProp): JSX.Element {
    return (
        <div>
            <div id="sneakerpage"></div>
            <div className="productcard">
                <img src={sneaker.image}></img>
                <h1>Sneaker Name: {sneaker.model}</h1>
                <h2>Sneaker Brand: {sneaker.brand}</h2>
                <p className="price">price: {sneaker.price}</p>
            </div>
        </div>
    );
}