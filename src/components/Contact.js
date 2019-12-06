import React from 'react';
import styles from '../styles/components/Contact.module.css';
import {FormattedMessage} from "react-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <h2><FormattedMessage id={"darband.contact.title"}/></h2>
                        <div className={styles.sub}>
                            <a href="tel:004922418466380">
                                <FormattedMessage id={"darband.contact.call"}/>
                                <FontAwesomeIcon icon={faPhoneAlt} size={"2x"}/>
                            </a>
                            <a href="https://www.google.com/maps/dir//Darband+Iranian+Restaurant,+Siegstraße,+Sankt+Augustin/@50.7905699,7.0957355,12z/" target={"_blank"}>
                                <FormattedMessage id={"darband.contact.route"}/>
                                <FontAwesomeIcon icon={faLocationArrow} size={"2x"}/>
                            </a>
                            <a href="tel:004922418466380">
                                <span>Catering</span>
                                <FontAwesomeIcon icon={faTruck} size={"2x"}/>
                            </a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Contact;