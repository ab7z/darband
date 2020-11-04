import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styles from '../styles/components/Modal.module.css'

const Modal = () => {
    ReactModal.setAppElement('#root')
    const [isOpen, setIsOpen] = useState(true)

    const controlIsOpen = (value) => {
        setIsOpen(value)
    }

    return (
        <ReactModal
            isOpen={ isOpen }
            onRequestClose={ () => controlIsOpen(false) }
        >
            <div className={ styles.wrapper }>
                <h2 className={ styles.subHeading }>Liebe Gäste</h2>
                <p style={{textAlign: 'center'}}>
                    Aufgrund der Corona Reglungen können Sie gerne Ihre Bestellung bei uns abholen.<br/>
                    In naher Zukunft wird die Lieferung möglich sein.
                </p>
                <p style={ { fontSize: '2.2rem' } }><i>Ihr Darband Team</i></p>
                <button onClick={ () => controlIsOpen(false) }>ok</button>
            </div>
        </ReactModal>
    )
}

export default Modal