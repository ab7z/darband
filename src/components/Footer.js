import React from 'react';
import styles from '../styles/components/Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FormattedMessage} from "react-intl";
import Modal from 'react-modal';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImprint: false
        }
    }

    setShowImprint = (boolean) => {
        this.setState({showImprint: boolean});
    };

    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className={styles.rights}>
                        <FormattedMessage id={'darband.rights'}/>
                        <span> &copy; {new Date().getFullYear()}</span>
                        <span> &minus; Siegstraße 28, 53757 Sankt Augustin</span>
                    </div>
                    <div className={styles.subContainer}>
                        <div className={styles.imprint}
                             onClick={() => {
                                 this.setShowImprint(true)
                             }}
                        >
                            <FormattedMessage id={'darband.impress'}/>
                        </div>
                        <div className={styles.privacyProtection}>
                            Datenschutz
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} size={"2x"}/>
                        <FontAwesomeIcon icon={faCode} size={"1x"}/>
                        <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                    </div>
                </footer>

                <Modal isOpen={this.state.showImprint}
                       onRequestClose={() => {
                           this.setShowImprint(false)
                       }}
                >
                    UNDER CONSTRUCTION
                </Modal>
            </React.Fragment>
        );
    }
}

export default Footer;