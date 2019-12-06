import React from 'react';
import styles from '../styles/components/Testimonials.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

class Testimonials extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.testimonials}>
                    <div className={styles.container}>
                        <h2>Unsere Kunden und Wir</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>Sehr netter und zuvorkommender Betreiber. Qualitativ sehr gutes persisches Essen zu einem verhältnismäßig gutem Preis. Wir gehen dort sehr gerne essen. Alles super Lecker!</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>Pejman Ghafori</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>Sehr lecker und ausgenommen freundliche Bedienung. Ich bin leider nur selten in der Nähe, aber wenn ich nach Sankt Augustin fahre, plane ich immer einen Stop mit ein.</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>APA COLOR</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>Geht es noch authentischer? Einfach perfekt, wir kommen auf jeden Fall öfters wieder. Super lecker, probieren!!!</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>mopped rolf</p>
                                </div>
                            </div>
                        </div>
                        <a
                                href="https://www.google.com/maps/place/Darband+Iranian+Restaurant/@50.7904354,7.1637579,17z/data=!4m7!3m6!1s0x0:0x4e2c31a9cb116970!8m2!3d50.7904354!4d7.1659466!9m1!1b1"
                                target={'blank'}
                                rel={'noopener'}
                                aria-label={"lese mehr Rezensionen von Darband Restaurant in Sankt Augustin bei google map"}
                            >
                                Lese weiter
                            </a>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonials;