import React from 'react';
import styles from '../styles/components/Foods.module.css';
import {FormattedMessage} from "react-intl";

class Foods extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.foods}>
                    <h2><FormattedMessage id={"darband.foods.title"}/></h2>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/1.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/2.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/3.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/4.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/1.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/2.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/3.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/4.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/1.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/2.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/3.jpg')} alt=""/>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={require('../images/4.jpg')} alt=""/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Foods;