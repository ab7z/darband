import React from 'react';
import styles from '../styles/components/Foods.module.css';
import {FormattedMessage} from "react-intl";

class Foods extends React.Component {
    constructor(props) {
        super(props);
    }

    foodObjects = [
        {
            header: "Kubideh",
            info: "Zwei Hackfleischspieße aus Lammfilet serviert mit Butter, Reis und Grilltomate",
            price: "11,00 €"
        },
        {
            header: "Barg",
            info: "Ein Spieß aus Lammfilet serviert mit Butter, Reis und Grilltomate",
            price: "14,00 €"
        },
        {
            header: "Chenjeh Soltani",
            info: "Ein Spieß aus Lammfilet und ein Hackfleischspieß serviert mit Butter, Reis und Grilltomate",
            price: "17,00 €"
        },
        {
            header: "Tschendje",
            info: "Ein Spieß aus Lammfilet serviert mit Butter, Reis und Grilltomate",
            price: "14,00 €"
        },
        {
            header: "Schapuri",
            info: "Ein Spieß Hähnchenbrustfilet und ein Hackfleischspieß aus Lammfilet serviert mit Butter, Reis und Grilltomate",
            price: "15,00 €"
        },
        {
            header: "Soltani",
            info: "Ein Spieß aus Lammfilet und ein Hackfleischspieß serviert mit Butter, Reis und Grilltomate",
            price: "17,00 €"
        },
        {
            header: "Djujeh Kabab (Filet)",
            info: "Ein Spieß Hähnchenbrustfilet mariniert serviert mit Butter, Reis und Grilltomate",
            price: "12,00 €"
        },
        {
            header: "Djujeh Kabab (mit Knochen)",
            info: "Ein Spieß Hähnchen mit Knochen serviert mit Butter, Reis und Grilltomate",
            price: "13,00 €"
        },
        {
            header: "Ghormessabsi",
            info: "Sauce aus verschiedenen Kräuter, getrocknete Limetten, Rote Bohnen und Lammgulasch mit Reis",
            price: "10,00 €"
        },
        {
            header: "Khoresht Ghejmeh",
            info: "Sauce aus Linsen, fr. Tomaten, getrocknete Limetten und Lammgulasch mit Reis",
            price: "10,00 €"
        },
        {
            header: "Khoresht Ghejmeh Bademjan",
            info: "Sauce aus Linsen, fr. Tomaten, getrocknete Limetten, gebratener Aubergine und Lammgulasch mit Reis",
            price: "11,00 €"
        },
        {
            header: "Khoresht Karafs",
            info: "Sauce aus Sellerien, Petersillien, Minze und Lammgulasch mit Reis",
            price: "12,00 €"
        },
        {
            header: "Khoresht Fessendschan",
            info: "Sauce aus gemahlenen Wallnüssen, Granatapfel Mark, Reis und Hähnchenfleisch",
            price: "14,00 €"
        },
        {
            header: "Baghali Polo ba Mahicheh",
            info: "Gekochte Lamm Haxe in einer Spezialsauce serviert mit Reis, dicken Bohnen und Dill",
            price: "17,00 €"
        },
        {
            header: "Mirza Ghassemi",
            info: "Gegrillte Auberjine mit Knoblauch, frischen Tomaten, Ei und Tomatenmark",
            price: "7,00 €"
        },
        {
            header: "Kashk-e Bademjan",
            info: "Gebratene Auberjine serviert mit Molke und geräucherte Zwiebeln",
            price: "7,00 €"
        }
    ]

    render() {
        return (
            <React.Fragment>
                <section className={styles.foods}>
                    <h2><FormattedMessage id={"darband.foods.title"}/></h2>
                    <div className={styles.container}>
                        {this.foodObjects.map((food, index) =>
                            <React.Fragment key={index}>
                                <div className={styles.foodContainer}>
                                    <div className={styles.imageContainer}
                                         key={food.header + index}
                                         id={food.header}
                                    >
                                        <img src={require('../images/' + (index+1) + (this.props.webp ? '.webp' : '.jpeg'))}
                                             alt={`${food.header}`} height={400}/>
                                    </div>
                                    <h2>{food.header}</h2>
                                    <p>{food.info}</p>
                                    <p>{food.price}</p>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Foods;
