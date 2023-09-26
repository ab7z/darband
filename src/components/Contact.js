import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons/faPhoneAlt"
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styles from "../styles/components/Contact.module.css"

class Contact extends React.Component {
  render() {
    return (
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2>Wir sind für Euch da</h2>
          <div className={styles.sub}>
            <a href='tel:004922418466380'>
              Ruf uns an
              <FontAwesomeIcon
                icon={faPhoneAlt}
                size={"2x"}
              />
            </a>
            <a
              href='https://www.google.com/maps/place/Darband+Iranian+Restaurant/@50.8089054,7.1046294,17z/data=!3m2!4b1!5s0x47bedfc4f084f34d:0x231132ed93030053!4m6!3m5!1s0x47bee0aa5a80ffc3:0x4e2c31a9cb116970!8m2!3d50.8089054!4d7.1046294!16s%2Fg%2F11d_8djmxs?entry=ttu'
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              Besuche uns
              <FontAwesomeIcon
                icon={faLocationArrow}
                size={"2x"}
              />
            </a>
            <a href='tel:004922418466380'>
              <span>Catering</span>
              <FontAwesomeIcon
                icon={faTruck}
                size={"2x"}
              />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
