import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ForgetPassword from "./pages/auth/ForgetPassword/ForgetPassword";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";
import ServicesPage from "./pages/ServicesPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactsPage from "./pages/ContactsPage";
import SelfLevelingFloors from "./pages/products/SelfLevelingFloors";
import CardWrap from "./components/CardWrap/CardWrap";
import Basket from "./pages/profilePage/Basket/Basket";
import MyComments from "./pages/profilePage/MyComments/MyComments";
import OrderHistory from "./pages/profilePage/OrderHistory/OrderHistory";
import Profile from "./pages/profilePage/Profile/Profile";
import SelectedProducts from "./pages/profilePage/SelectedProducts/SelectedProducts";
import SinglePage from "./pages/SinglePage";
import Stairs from "./pages/products/Stairs";
import LaminateFlooring from "./pages/products/LaminateFlooring";
import EngineeringModule from "./pages/products/EngineeringModule";
import EngineeringChristmasTree from "./pages/products/EngineeringChristmasTree";
import EngineeringBoard from "./pages/products/EngineeringBoard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="servicespage" element={<ServicesPage />} />
        <Route path="reviewspage" element={<ReviewsPage />} />
        <Route path="contactspage" element={<ContactsPage />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="selflevelingfloors" element={<SelfLevelingFloors />} />
        <Route path="stairs" element={<Stairs/>}/>
        <Route path="laminateflooring" element={<LaminateFlooring/>}/>
        <Route path="engineeringmodule" element={<EngineeringModule/>}/>
        <Route path="engineeringchristmastree" element={<EngineeringChristmasTree/>}/>
        <Route path="engineeringboard" element={<EngineeringBoard/>}/>
        <Route path="/product/:id" element={<SinglePage />} />
        <Route path="cardWrap" element={<CardWrap />} />
        <Route path="basket" element={<Basket />} />
        <Route path="my-comments" element={<MyComments />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="selected-products" element={<SelectedProducts />} />
      </Routes>
    </>
  );
};

export default App;
