import React, { useEffect } from 'react'
import Navbar from '../Pages/Home/Navbar'
import Slider from '../Pages/Home/Slider'
import slide1 from '../assets/Images/stock-market.jpg';
import slide2 from '../assets/Images/gettyimages.jpg';
import Investment from '../Pages/Home/Investment';
import Product from '../Pages/Home/Product';
import Team from '../Pages/Home/Team';
import Careers from '../Pages/Home/Careers';
import { useLocation } from 'react-router-dom';
import News from '../Pages/Home/News';
import Footer from '../Pages/Home/Footer';


function Home() {

  let images = [slide1, slide2];

 const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Timeout zaruri hai kyunki DOM ab tak load nahi hua hota
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // SCROLL
        }
      }, 100);
    }
  }, [location]);


  return (
    <div className="w-screen h-screen p-0 m-0 overflow-x-hidden">

    <Navbar/>
    <Slider images={images}/>
    <Investment id="investment" />
    <Product  id="product"/>
    <Team id="team" />
    <Careers  id="careers"/>
    <News/>
    <Footer/>
    
    </div>
  )
}

export default Home