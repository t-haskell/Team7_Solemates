import React from "react";
import { render } from "@testing-library/react";
import { WishList } from "./userWishList";
import airmax from "../images/Airmax270.jpg";
import SuperStarAdv from "../images/SuperStarAdv.jpg";

describe("WishList", () => {
    type SneakerBrand = "Nike" | "Puma" | "Adidas";
    const sneakers = [
        {
            model: "Nike Air Max 270",
            colors: ["Red", "Blue", "Green"],
            selectedColor: "",
            brand: "Nike" as SneakerBrand,
            size: [8, 9, 10],
            selectedSize: NaN,
            price: 100,
            outOfStock: false,
            image: airmax
        },
        {
            model: "Superstar ADV",
            colors: ["white", "black", "Red", "Orange"],
            selectedColor: "",
            brand: "Adidas" as SneakerBrand,
            size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
            selectedSize: NaN,
            price: 100,
            outOfStock: false,
            image: SuperStarAdv
        }
    ];
    test("renders WishList with sneakers", () => {
        const { container } = render(<WishList sneakers={sneakers} />);
        expect(container.firstChild).toBeInTheDocument();
        expect(container.firstChild.childNodes.length).toBe(sneakers.length);
    });
});
