import React from "react";
import styles from '../styles/components/Gallery.module.css';

class Gallery extends React.Component {

    render() {
        let array = Array(6).fill(undefined);

        return (
            <React.Fragment>
                <section className={styles.gallery}>
                    <h2 className={styles.heading}>Gallery</h2>
                    <div className={styles.container}>
                        {array.map((image, index) =>
                            <React.Fragment key={index}>
                                <div className={styles.imageContainer}>
                                    <img src={require(`../images/g${index + 1}.jpeg`)} alt=""/>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Gallery;