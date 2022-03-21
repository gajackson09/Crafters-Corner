import './App.css';
import React from "react";
import Product from "./components/Product";
import MainMenu from './components/MainMenu';
import ProductApp from './components/ProductApp';
import img from "./components/MainMenu/img.jpg";
import img3 from "./components/MainMenu/img3.jpg";

const data = [
  {
    menuName: "Blankets",
    menuItems: [
      {
        itemId: 1,
        itemPrice: "177.80 (+shipping)",
        itemName: "The Susie - our simple and classic chunky knitted blanket",
        itemDescription:
          "This is our most soft and comfortable chunky knit blanket. ",
      },
      {
        itemId: 2,
        itemPrice: "126.95 (+shipping)",
        itemName: "The Michelle - the multi-colored blanket",
        itemDescription: "This is the sister to The Susie blanket, but in a varicolored pattern",
      },
      {
        itemId: 3,
        itemPrice: "214.09 (+shipping)",
        itemName: "The Hannah - biscuit style blanket",
        itemDescription:
          "This blanket includes a chess board pattern, but still has all of the great points of the original.",
      },
    ],
  },
  {
    menuName: "Accessories + Pet Fun",
    menuItems: [
      {
        itemId: 45,
        itemPrice: "77.07 (+shipping)",
        itemName: "Scarf",
        itemDescription: "This is the scarf version of The Susie, still soft and comfortable as always.",
      },
      {
        itemId: 47,
        itemPrice: "44.18 (+shipping)",
        itemName: "Chunky Yarn",
        itemDescription:
          "Here you can try our famous yarn in your own house!",
      },
      {
        itemId: 49,
        itemPrice: "149.83 (+shipping)",
        itemName: "Cat Bed",
        itemDescription:
          "A cute, cozy, and comfortable bed and just the right size for your furry friends.",
      },
      {
        itemId: 50,
        itemPrice: "185.46 (+shipping)",
        itemName: "Dog Bed",
        itemDescription: "A cute, cozy, and comfortable bed and just the right size for your furry friends.",
      },
    ],
  },
]


function App() {
  return(
      <>
      <h1>Welcome to Crafter Corner</h1>
      <img src={img3} alt="a blanket in a chair" text="Welcome to Crafters Corner!"/>
      <ProductApp data={data} />
      <img src={img} alt="a blanket in a chair"/>
      </>
  );
}

export default App;