import React from "react";
import styles from '../styles/components/Opening.module.css';

class Opening extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.opening}>
                    <h2>Unsere Öffnungszeiten</h2>
                    <div className={styles.times}>
                        <p>
                            <span>Montag:</span>
                            <span>geschlossen</span>
                        </p>
                        <p>
                            <span>Dienstag:</span>
                            <span>12:00 &mdash; 22:00</span>
                        </p>
                        <p>
                            <span>Mittwoch</span>
                            <span>12:00 &mdash; 22:00</span>
                        </p>
                        <p>
                            <span>Donnerstag</span>
                            <span>12:00 &mdash; 22:00</span>
                        </p>
                        <p>
                            <span>Freitag</span>
                            <span>12:00 &mdash; 22:00</span>
                        </p>
                        <p>
                            <span>Samstag</span>
                            <span>12:00 &mdash; 22:00</span>
                        </p>
                        <p>
                            <span>Sonntag</span>
                            <span>14:00 &mdash; 22:00</span>
                        </p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Opening;