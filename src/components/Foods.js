import React from 'react';
import styles from '../styles/components/Foods.module.css';
import {FormattedMessage} from "react-intl";
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

class Foods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            isOpen: false,
            currentFood: null
        };
        Modal.setAppElement('#root');
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
                            <div className={styles.imageContainer}
                                 key={index}
                                 onClick={() => this.setIsOpen(true, food)}
                                 id={food}
                            >
                                <img src={require('../images/' + food + '.jpeg')} alt=""/>
                            </div>
                        )}
                    </div>
                </section>
                <Modal isOpen={this.state.isOpen}
                       onRequestClose={() => this.setIsOpen(false, null)}
                       contentLabel={"Gerichte"}
                       className={styles.modalContent}
                       overlayClassName={styles.modalOverlay}
                >
                    <div className={styles.modalContainer}>
                        <div className={styles.modalHeader}>
                            <h2>
                                <FormattedMessage id={'darband.foods.' + this.state.currentFood + '.header'}/>
                            </h2>
                            <FontAwesomeIcon icon={faTimes}
                                             size={"2x"}
                                             onClick={() => {
                                                 this.setIsOpen(false, null)
                                             }}
                            />
                        </div>
                        <div className={styles.modalInfo}>
                            <div className={styles.modalInfoText}>
                                <div>
                                    <p><FormattedMessage id={'darband.foods.' + this.state.currentFood + '.info'}/></p>
                                </div>
                                <div className={styles.modalIcons}>

                                </div>
                            </div>
                            <div className={styles.modalPrice}>
                                <p><FormattedMessage id={'darband.foods.' + this.state.currentFood + '.price'}/></p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Foods;