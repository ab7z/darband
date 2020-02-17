import React from 'react';
import styles from '../styles/components/Foods.module.css';
import {FormattedMessage} from "react-intl";

class Foods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            isOpen: false,
            currentFood: null
        };
    }

    icons = {
        1: []
    };

    setIsOpen = (boolean, food) => {
        this.setState({
            isOpen: boolean,
            currentFood: food
        });
    };

    render() {
        return (
            <React.Fragment>
                <section className={styles.foods}>
                    <h2><FormattedMessage id={"darband.foods.title"}/></h2>
                    <div className={styles.container}>
                        {this.state.foods.map((food, index) =>
                            <React.Fragment key={index}>
                                <div className={styles.foodContainer}>
                                    <div className={styles.imageContainer}
                                         key={index}
                                         onClick={() => this.setIsOpen(true, food)}
                                         id={food}
                                    >
                                        <img src={require('../images/' + food + (this.props.webp ? '.webp' : '.jpeg'))}
                                             alt="" height={400}/>
                                    </div>
                                    <h2>
                                        <FormattedMessage id={'darband.foods.' + food + '.header'}/>
                                    </h2>
                                    <p><FormattedMessage id={'darband.foods.' + food + '.info'}/></p>
                                    <p><FormattedMessage id={'darband.foods.' + food + '.price'}/></p>
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