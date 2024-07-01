import React from "react"
import "react-medium-image-zoom/dist/styles.css"
import Contact from "./components/Contact"
import Description from "./components/Description"
import Foods from "./components/Foods"
import Footer from "./components/Footer"
import GalleryComponent from "./components/GalleryComponent"
import Hero from "./components/Hero"
import Modal from "./components/Modal"
import Opening from "./components/Opening"
import Testimonials from "./components/Testimonials"
import "./styles/App.css"

function App() {
  let iosApp =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
  let webpEnabled = window.safari === undefined && !iosApp

  const dateObject = new Date()

  return (
    <>
      <Hero webp={webpEnabled} />
      <Description />
      <Foods webp={webpEnabled} />
      <Testimonials />
      <GalleryComponent />
      <Opening />
      <Contact webp={webpEnabled} />
      <Footer />
      {dateObject.getDate() <= 20 &&
      dateObject.getMonth() + 1 === 7 &&
      dateObject.getFullYear() === 2024 ? (
        <Modal />
      ) : null}
    </>
  )
}

export default App
