'use client';
import Image from 'next/image';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        {/* Left Column - Stacked Images */}
        <div className={styles.leftCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/gallery-art.png"
              alt="Art Gallery"
              width={800}
              height={500}
              className={styles.img}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/gallery-bag.png"
              alt="Aura Roasters"
              width={800}
              height={500}
              className={styles.img}
            />
          </div>
        </div>

        {/* Right Column - Tall Image */}
        <div className={styles.rightCol}>
          <div className={styles.imageWrapperTall}>
            <Image
              src="/assets/gallery-cafe.png"
              alt="Cafe Atmosphere"
              width={800}
              height={1100}
              className={styles.img}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
