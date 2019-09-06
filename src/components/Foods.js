import React from 'react';
import styles from '../styles/components/Foods.module.css';
import {FormattedMessage} from "react-intl";

class Foods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        }
    };

    render() {
        return (
            <React.Fragment>
                <section className={styles.foods}>
                    <h2><FormattedMessage id={"darband.foods.title"}/></h2>
                    <div className={styles.container}>
                        {this.state.foods.map((food, index)=>
                            <div className={styles.imageContainer} key={index }>
                                <img src={require('../images/' + food +'.jpeg')} alt=""/>
                            </div>
                        )}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Foods;