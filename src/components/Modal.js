import React, { useState } from "react"
import ReactModal from "react-modal"
import styles from "../styles/components/Modal.module.css"

const Modal = () => {
  ReactModal.setAppElement("#root")
  const [isOpen, setIsOpen] = useState(true)

  const controlIsOpen = (value) => {
    setIsOpen(value)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => controlIsOpen(false)}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.subHeading}>Liebe Gäste,</h2>
        <p>
          aus gesundheitlichen Gründen bleibt unser Restaurant vorübergehend geschlossen.
        </p>
        <p>
          Vielen Dank für Ihr Verständnis. Wir hoffen, Sie bald wieder bei uns begrüßen zu dürfen.
        </p>
        <p style={{ fontSize: "2.2rem" }}>
          <i>Ihr Restaurant-Team</i>
        </p>
        <button onClick={() => controlIsOpen(false)}>ok</button>
      </div>
    </ReactModal>
  )
}

export default Modal
