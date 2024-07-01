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
        <h2 className={styles.subHeading}>Liebe Gäste</h2>
        <p>
          Ab <strong>02.07.2024</strong> bis <strong>20.07.2024</strong> bleibt unser Geschäft
          geschlossen. Ab <strong>20.07.2024</strong> sind wir wieder wie gewohnt für Sie da.
        </p>
        <p style={{ fontSize: "2.2rem" }}>
          <i>Ihr Darband Team</i>
        </p>
        <button onClick={() => controlIsOpen(false)}>ok</button>
      </div>
    </ReactModal>
  )
}

export default Modal
