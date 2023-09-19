import React from "react"
import { FormattedMessage } from "react-intl"
import styles from "../styles/components/Hero.module.css"

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className={[styles.hero, this.props.webp ? styles.hero_webp : styles.hero_jpg].join(" ")}>
          <h1>
            <FormattedMessage id={"darband.hero.h1.title"} />
          </h1>
          <p>
            <FormattedMessage id={"darband.hero.p.title"} />
          </p>
        </header>
      </React.Fragment>
    )
  }
}

export default Hero
