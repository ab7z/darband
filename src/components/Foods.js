import React from 'react';
import styles from '../styles/components/Foods.module.css';

class Foods extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.foods}>
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
                </section>
            </React.Fragment>
        );
    }
}

export default Foods;