import React from 'react';
import styles from '../styles/components/Hero.module.css';
import { FormattedMessage } from "react-intl";

class Hero extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={styles.hero}>
                    <h1>
                        <FormattedMessage id={"darband.hero.main.h1"}/>
                    </h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Hero;