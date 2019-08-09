import React from 'react';
import styles from '../styles/components/Contact.module.css';
import {FormattedMessage} from "react-intl";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <h2><FormattedMessage id={"darband.contact.title"}/></h2>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Contact;