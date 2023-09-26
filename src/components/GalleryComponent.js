import Zoom from "react-medium-image-zoom"
import styles from "../styles/components/Gallery.module.css"

export default function GalleryComponent() {
  const galleryLength = [11, 9, 4, 2, 5, 12, 1, 6]

  return (
    <>
      <section className={styles.gallery}>
        <h2 className={styles.heading}>Gallery</h2>

        <div className={styles.container}>
          {galleryLength.map((i) => (
            <Zoom key={`gallery-image-${i}`}>
              <img
                src={require(`../images/gallery/${i}.webp`)}
                alt={`gallery from Darband Restaurant in Troisdorf`}
              />
            </Zoom>
          ))}
        </div>
      </section>
    </>
  )
}
