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
                        <h2>Our customers can't live without us</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>Omnifood is just awesome! I just launched a startup which leaves me with no time for
                                    cooking, so
                                    Omnifood is a life-saver. Now that I got used to it, I couldn't live without my
                                    daily meals!</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>Alberto Duncan</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>Inexpensive, healthy and great-tasting meals, delivered right to my home. We have
                                    lots of food
                                    delivery here in Lisbon, but no one comes even close to Omifood. Me and my family
                                    are so in
                                    love!</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>Joana Silva</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <FontAwesomeIcon icon={faQuoteLeft} size={"3x"}/>
                                <p>I was looking for a quick and easy food delivery service in San Franciso. I tried a
                                    lot of them and
                                    ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the
                                    great work!</p>
                                <div className={styles.ref}>
                                    <div className={styles.stars}>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                        <FontAwesomeIcon icon={faStar} size={"1x"}/>
                                    </div>
                                    <p>Milton Chapman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Testimonials;