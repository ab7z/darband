import React from "react"
import Contact from "./components/Contact"
import Description from "./components/Description"
import Foods from "./components/Foods"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Modal from "./components/Modal"
import Opening from "./components/Opening"
import Testimonials from "./components/Testimonials"
import "./styles/App.css"

function App() {
  let iosApp = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
  let webpEnabled = window.safari === undefined && !iosApp

  const dateObject = new Date()

  return (
    <div className='App'>
      <Hero webp={webpEnabled} />
      <Description />
      <Foods webp={webpEnabled} />
      <Testimonials />
      <Gallery webp={webpEnabled} />
      <Opening />
      <Contact webp={webpEnabled} />
      <Footer />
      {dateObject.getDate() <= 18 && dateObject.getMonth() + 1 === 9 && dateObject.getFullYear() === 2023 ? (
        <Modal />
      ) : null}
    </div>
  )
}

export default App
