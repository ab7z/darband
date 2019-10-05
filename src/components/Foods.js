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
            isOpen: false
        };
        Modal.setAppElement('#root');
    };

    /**
     *
     * @param boolean
     */
    setIsOpen = (boolean) => {
        this.setState({isOpen: boolean});
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
                                 onClick={() => this.setIsOpen(true)}
                            >
                                <img src={require('../images/' + food + '.jpeg')} alt=""/>
                            </div>
                        )}
                    </div>
                </section>
                <Modal isOpen={this.state.isOpen}
                       onRequestClose={() => this.setIsOpen(false)}
                       contentLabel={"Gerichte"}
                       style={{
                           overlay: {
                               backgroundColor: 'rgba(0, 0, 0, .4)'
                           }
                       }}
                >
                    <div className={styles.modalContainer}>
                        <h2>demo</h2>
                        <FontAwesomeIcon icon={faTimes} size={"2x"}
                                         onClick={() => {
                                             this.setIsOpen(false)
                                         }}
                        />
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Foods;