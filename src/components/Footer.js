import React from 'react';
import styles from '../styles/components/Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <FontAwesomeIcon icon={faReact} size={"2x"}/>
                    <FontAwesomeIcon icon={faCode} size={"1x"}/>
                    <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;