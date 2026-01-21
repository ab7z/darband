import React from "react"
import Zoom from "react-medium-image-zoom"
import { FoodObjects } from "../data/foods"
import { Menu } from "../data/menu"
import styles from "../styles/components/Foods.module.css"

export default function Foods() {
  return (
    <section className={styles.foods}>
      <h2>Unser Menü</h2>

      <div className={styles.container}>
        {FoodObjects.map((food, index) => (
          <div
            key={index}
            className={styles.food}
          >
            <img
              key={food.header + index}
              src={require("../images/" + (index + 1) + ".webp")}
              alt={`${food.header}`}
              height={400}
            />

            <h2>{food.header}</h2>
            <p>{food.info}</p>
          </div>
        ))}
      </div>

      <div className={styles.menu}>
        <h3>Du kannst unser vollständiges Menü hier entnehmen</h3>

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
