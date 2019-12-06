import React from 'react';
import './styles/App.css';
import Hero from "./components/Hero";
import Description from "./components/Description";
import Foods from "./components/Foods";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Opening from "./components/Opening";

function App() {
    return (
        <div className="App">
            <Hero/>
            <Description/>
            <Foods/>
            <Testimonials/>
            <Gallery/>
            <Opening/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
