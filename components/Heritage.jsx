import Image from 'next/image';
import styles from './Heritage.module.css';

export default function Heritage() {
  return (
    <section className={styles.heritageSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>heritage</h2>
          <p className={styles.description}>
            at umee, coffee is more than a drink. it is a dialogue between 
            tradition, modern craft, and community — designed to belong, 
            to endure, and to inspire every ritual.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItemLarge}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/heritage-1.png" 
                alt="Heritage Table" 
                width={800} 
                height={1000} 
                className={styles.img}
              />
            </div>
            <span className={styles.caption}>CULTURE</span>
          </div>

          <div className={styles.gridItemSmall}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/heritage-2.png" 
                alt="Heritage Detail" 
                width={500} 
                height={500} 
                className={styles.img}
              />
            </div>
            <span className={styles.caption}>HERITAGE</span>
          </div>

          <div className={styles.gridItemSide}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/heritage-3.png" 
                alt="Heritage Portrait" 
                width={600} 
                height={800} 
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
