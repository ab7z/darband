import styles from "../styles/components/Gallery.module.css"

export default function Gallery(props) {
  let array = Array(6).fill(undefined)

  return (
    <>
      <section className={styles.gallery}>
        <h2 className={styles.heading}>Gallery</h2>
        <div className={styles.container}>
          {array.map((_, index) => (
            <div
              key={index}
              className={styles.imageContainer}
            >
              <img
                src={require("../images/g" + (index + 1) + ".webp")}
                alt={`Darband Restaurant Gallery item number ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
