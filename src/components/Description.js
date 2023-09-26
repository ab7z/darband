import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity"
import { faSeedling } from "@fortawesome/free-solid-svg-icons/faSeedling"
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styles from "../styles/components/Description.module.css"

class Description extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          className={styles.container}
          id={"features"}
        >
          <div className={styles.sub1}>
            <h2>
              GET FOOD FAST
              <span> &mdash; </span>
              NOT FAST FOOD
            </h2>
            <p>
              Hallo, wir sind das Darband Restaurant, Euer Premium was persisches Essen angeht. Wir wissen, dass Sie
              Wert auf ein gesundes Essen legen, darin sind wir sehr gut.
            </p>
          </div>
          <div className={styles.sub2}>
            <div className={styles.card}>
              <FontAwesomeIcon
                icon={faInfinity}
                size={"4x"}
              />
              <h3>Immer für Euch da</h3>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon
                icon={faStopwatch}
                size={"4x"}
              />
              <h3>Nur wenige Minuten</h3>
            </div>
            <div className={styles.card}>
              <FontAwesomeIcon
                icon={faSeedling}
                size={"4x"}
              />
              <h3>100% frisch</h3>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Description
