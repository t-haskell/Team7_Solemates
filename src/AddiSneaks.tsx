/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import R1 from "../src/images/airf.jpg";
import SuperStarAdv from "../src/images/SuperStarAdv.jpg";
import Solarcontrol from "../src/images/Solarcontrol.jpg";
import NMD_V3 from "../src/images/NMD_V3.jpg";
import ForumLow from "../src/images/ForumLow.jpg";
import NIZZAPlatformW from "../src/images/NIZZA Platform W.jpg";
import NMD_R1RefinedShoe from "../src/images/NMD_R1 Refined Shoe.jpg";
import StanSmith from "../src/images/StanSmith.jpg";
import fo from "../src/images/fo.jpg";
const AdidasSneaks: Sneaker[] = [
    {
        model: "Superstar ADV",
        colors: ["white", "black", "Red", "Orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: SuperStarAdv
    },
    {
        model: "Solarcontrol Running Shoes",
        colors: ["Crystal white", "Core black", "Red", "Shadow Navy", "orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13,
            13.5, 14, 15.5, 15
        ],
        selectedSize: NaN,
        price: 130,
        outOfStock: false,
        image: Solarcontrol
    },
    {
        model: "NMD_V3",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12
        ],
        selectedSize: NaN,
        price: 170,
        outOfStock: false,
        image: NMD_V3
    },
    {
        model: "Forum Low",
        colors: ["Cloud White"],
        selectedColor: "",
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        selectedSize: NaN,
        price: 110,
        outOfStock: false,
        image: ForumLow
    },
    {
        model: "NIZZA Platform W",
        colors: ["Cloud White", "Core Black", "Gold"],
        selectedColor: "",
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        selectedSize: NaN,
        price: 85,
        outOfStock: false,
        image: NIZZAPlatformW
    },
    {
        model: "NMD_R1 Refined Shoe",
        colors: ["Cloud White", "Core Black"],
        selectedColor: "",
        brand: "Adidas",
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
        selectedSize: NaN,
        price: 140,
        outOfStock: false,
        image: NMD_R1RefinedShoe
    },
    {
        model: "4DFWD",
        colors: ["Cloud White", "Core Black", "halo silver"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13
        ],
        selectedSize: NaN,
        price: 200,
        outOfStock: false,
        image: NMD_R1RefinedShoe
    },
    {
        model: "Stan Smith Shoes",
        colors: ["Cloud White", "Core Black", "Chalk White"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: StanSmith
    },
    {
        model: "Forum Midd",
        colors: ["Cloud White", "Blue", "Brown", "Royal Blue"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        selectedSize: NaN,
        price: 110,
        outOfStock: false,
        image: fo
    }
];
export default AdidasSneaks;
