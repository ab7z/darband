import React from "react"
import { FormattedMessage } from "react-intl"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { FoodObjects } from "../data/foods"
import { Menu } from "../data/menu"
import styles from "../styles/components/Foods.module.css"

export default function Foods() {
  return (
    <section className={styles.foods}>
      <h2>
        <FormattedMessage id={"darband.foods.title"} />
      </h2>

      <div className={styles.container}>
        {FoodObjects.map((food, index) => (
          <React.Fragment key={index}>
            <div className={styles.foodContainer}>
              <div
                className={styles.imageContainer}
                key={food.header + index}
                id={food.header}
              >
                <img
                  src={require("../images/" + (index + 1) + ".webp")}
                  alt={`${food.header}`}
                  height={400}
                />
              </div>
              <h2>{food.header}</h2>
              <p>{food.info}</p>
              <p>{food.price}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className={styles.menu}>
        <h3>
          <FormattedMessage id={"darband.foods.menu"} />
        </h3>

        <div className={styles.menuContainer}>
          {Menu.map((m, i) => (
            <Zoom key={`menu-image-${m.name}-${i}`}>
              <img
                src={require(`../images/menu/${m.imageName}`)}
                alt={`${m.name}`}
                height={250}
              />
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  )
}
