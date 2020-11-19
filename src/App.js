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
//import LogRocket from 'logrocket';

function App() {
    let iosApp = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    let webpEnabled = window.safari === undefined && !iosApp;

    const dateObject = new Date();

/*
    if (process.env.NODE_ENV === 'production') {
        LogRocket.init('s3mkoe/darband');
    }
*/

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
                dateObject.getDate() <= 30 && dateObject.getMonth() + 1 === 11 && dateObject.getFullYear() === 2020
                && <Modal/>
            }
        </div>
    );
}

export default App;
