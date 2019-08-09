import React from 'react';
import styles from '../styles/components/Hero.module.css';
import {FormattedMessage} from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

class Hero extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header className={styles.hero}>
                    <div className={styles.heroContainer}>
                        <h1>
                            <FormattedMessage id={"darband.hero.h1.title"}/>
                        </h1>
                        <p>
                            <FormattedMessage id={"darband.hero.p.title"}/>
                        </p>
                        <FontAwesomeIcon icon={faAngleDoubleDown} size={"3x"} color={"white"}/>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Hero;