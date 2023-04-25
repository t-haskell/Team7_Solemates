/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import nikeAirMax from "../src/images/anthony-a-JldH_vLwdYs-unsplash.jpg";
import adidas from "../src/images/1.png";
import nike from "../src/images/2.png";
import puma from "../src/images/3.png";
import { Sneaker } from "./interfaces/sneaker";
import { WishList } from "./userWishList";

function App(): JSX.Element {
    const [currList, setWishList] = useState<Sneaker[]>([]);

    return (
        <div className="App">
            <head>
                <title>Navpage mockup</title>
            </head>

            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                    </ul>
                </nav>
                <header>
                    <div className="bg">
                        <div className="content">
                            <div className="kolom">
                                <div className="a">
                                    <img src={adidas} />
                                </div>
                                <div className="b">
                                    <a href="#adidas">ADIDAS</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={nike} />
                                </div>
                                <div className="b">
                                    <a href="#nike">NIKE</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={puma} />
                                </div>
                                <div className="b">
                                    <a href="#puma">PUMA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <footer className="ADIDAS">
                    <div id="adidas">
                        <h1>ADIDAS</h1>
                    </div>
                </footer>
                <footer className="NIKE">
                    <div id="nike"></div>
                    <h1>NIKE</h1>
                </footer>
                <footer className="PUMA">
                    <div id="puma"></div>
                    <h1>PUMA</h1>
                </footer>
            </body>
            <footer className="WISHLIST">
                <WishList
                    sneakers={[
                        //This line will be currList from the state instead of the example
                        {
                            model: "Air Max",
                            brand: "Nike",
                            size: [1, 7, 9, 10],
                            price: 120,
                            image: nikeAirMax,
                            outOfStock: false,
                            colors: ["orange", "black"]
                        }
                    ]}
                />
            </footer>
        </div>
    );
}

export default App;
