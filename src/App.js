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
import Modal from './components/Modal';

function App() {
    let iosApp = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    let webpEnabled = window.safari === undefined && !iosApp;

    const dateObject = new Date();

    return (
        <div className="App">
            <Hero webp={webpEnabled}/>
            <Description/>
            <Foods webp={webpEnabled}/>
            <Testimonials/>
            <Gallery webp={webpEnabled}/>
            <Opening/>
            <Contact webp={webpEnabled}/>
            <Footer/>
            {
                dateObject.getDate() <= 17 && (dateObject.getMonth() + 1) === 4 && dateObject.getFullYear() === 2023
                ? <Modal/> : null
            }
        </div>
    );
}

export default App;
