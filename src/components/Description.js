import React from 'react';
import styles from '../styles/components/Description.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormattedMessage} from "react-intl";
import {faInfinity} from "@fortawesome/free-solid-svg-icons/faInfinity";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons/faStopwatch";
import {faSeedling} from "@fortawesome/free-solid-svg-icons/faSeedling";

class Description extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.container} id={'features'}>
                    <div className={styles.sub1}>
                        <h2>
                            <FormattedMessage id={"darband.features.heading.title.part1"}/>
                            <span> &mdash; </span>
                            <FormattedMessage id={"darband.features.heading.title.part2"}/>
                        </h2>
                        <p>
                            <FormattedMessage id={"darband.features.heading.subtitle"}/>
                        </p>
                    </div>
                    <div className={styles.sub2}>
                        <div className={styles.card}>
                            <FontAwesomeIcon icon={faInfinity} size={"4x"}/>
                            <h3>
                                <FormattedMessage id={"darband.features.uptime.h3"}/>
                            </h3>
                            <p>
                                <FormattedMessage id={"darband.lorem"}/>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FontAwesomeIcon icon={faStopwatch} size={"4x"}/>
                            <h3>
                                <FormattedMessage id={"darband.features.time.h3"}/>
                            </h3>
                            <p>
                                <FormattedMessage id={'darband.lorem'}/>
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FontAwesomeIcon icon={faSeedling} size={"4x"}/>
                            <h3>
                                <FormattedMessage id={"darband.features.healthy.h3"}/>
                            </h3>
                            <p>
                                <FormattedMessage id={"darband.lorem"}/>
                            </p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Description;