import React, { useState, useEffect } from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Comments from "../components/Comments/Comments";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div id="mainHeader">
            <MainHeader />
          </div>
          <div id="whyChooseUs">
            <WhyChooseUs />
          </div>
          <div id="comments">
            <Comments />  
          </div>
          <GoogleMap />
          <div id="footer">
            <Footer />  
          </div>
        </>
      )}
    </>
  );
};

export default Home;
