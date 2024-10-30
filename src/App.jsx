import { useState } from "react";
import logo from "./assets/brand_logo.png";
import shoe from "./assets/shoe_image.png";
import flipkart from "./assets/flipkart.png";
import amazon from "./assets/amazon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav className="mx-10 my-4">
          <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul className="flex space-x-5 cursor-pointer">
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div>
              <button className="bg-red-600 text-white px-5 py-1">Login</button>
            </div>
          </div>
        </nav>
      </header>
      <div className="flex justify-center mt-20 ">
        <div>
          <div className="my-2 ">
            <h1 className="font-extrabold lg:text-8xl sm:text-2xl md:text-4xl">
              YOUR FEET
            </h1>
            <h1 className="font-extrabold lg:text-8xl sm:text-2xl md:text-4xl">
              DESERVE
            </h1>
            <h1 className="font-extrabold lg:text-8xl sm:text-2xl md:text-4xl">
              THE BEST
            </h1>
          </div>
          <div className="text-[#5A5959] my-2">
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO</p>
            <p> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE </p>
            <p>THE BEST AND WE’RE HERE TO HELP YOU WITH OUR</p>
            <p>SHOES.</p>
          </div>
          <div className="flex space-x-3 my-3">
            <button className="bg-red-600 text-white px-2 py-1 sm:text-[10px] md:text-sm">
              Shop Now
            </button>
            <button className="text-[#5A5959] border-black">Category</button>
          </div>
          <div className="text-[#5A5959] my-2">
            <p>Also Available On</p>
          </div>
          <div className="flex space-x-3 items-center">
            <img src={flipkart} alt="flipkart" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
        <div>
          <img src={shoe} alt="shoe" />
        </div>
      </div>
    </>
  );
}

export default App;
