import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import data from "./data/data.json";
import Slider from "../src/components/Slider";
import StarProduct  from "../src/components/StarProduct";
import Heading from "../src/components/Heading";
import HotAccessories from "../src/components/HotAccessories"
import HotAccessoriesMenu from "../src/components/HotAccessoriesMenu";
import Offers from "../src/components/Offers";
import ProductReviews from "../src/components/ProductReviews"
import Videos from './components/Videos'
import Banner from './components/Banner'

import NavOptions from "./components/NavOptions"

import {banner} from "./data/data.json";

function App() {
  return (
    <Router>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      <Heading text="Hot Products"/>
      <Slider start={banner.start}/>
      <Heading text="Offers"/>
      <Offers offer={data.offer}/>

      <Heading text="Groccery"/>

      <StarProduct starProduct={data.starProduct}/>
      <Heading text="Products"/>

      <HotAccessoriesMenu/>

      <Route path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route>
      
       <Route exact path="/smartDevice">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>

       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>


       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       </Route>
       <Heading text="PRODUCT REVIEWS"/>

      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="PRODUCT Videos"/>

      <Videos videos={data.videos}/>
      <Heading text="Watch Items"/>

      <Banner  banner={data.banner}/>

      </Router>
    
  );
}

export default App;
