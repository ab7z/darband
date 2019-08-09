import React from 'react';
import './styles/App.css';
import Hero from "./components/Hero";
import Description from "./components/Description";
import Foods from "./components/Foods";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
            <Hero/>
            <Description/>
            <Foods/>
            <Testimonials/>
        </div>
    );
}

export default App;
