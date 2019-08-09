import React from 'react';
import './styles/App.css';
import Hero from "./components/Hero";
import Description from "./components/Description";
import Foods from "./components/Foods";

function App() {
    return (
        <div className="App">
            <Hero />
            <Description />
            <Foods />
        </div>
    );
}

export default App;
