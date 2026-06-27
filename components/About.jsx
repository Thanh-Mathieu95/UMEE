'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      
      {/* SECTION 1: HERO COLLAGE WITH GIAN TITLE OVERLAY */}
      <div className={styles.heroCollage}>
        
        <div className={styles.billboard}>
          {/* Overlapping Masonry Image Grid */}
          <div className={`${styles.collageImg} ${styles.img1}`}>
            <Image src="/assets/gallery-1.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img2}`}>
            <Image src="/assets/gallery-2.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img3}`}>
            <Image src="/assets/gallery-3.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img4}`}>
            <Image src="/assets/gallery-4.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img5}`}>
            <Image src="/assets/gallery-5.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img6}`}>
            <Image src="/assets/gallery-6.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img7}`}>
            <Image src="/assets/gallery-7.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img8}`}>
            <Image src="/assets/gallery-8.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img9}`}>
            <Image src="/assets/gallery-9.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img10}`}>
            <Image src="/assets/gallery-10.png" alt="Gallery item" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img11}`}>
            <Image src="/assets/gallery-cafe.png" alt="Cafe view" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img12}`}>
            <Image src="/assets/gallery-bag.png" alt="Brand coffee bag" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img13}`}>
            <Image src="/assets/phin-coffee.png" alt="Drip phin coffee" fill className={styles.img} priority />
          </div>
          <div className={`${styles.collageImg} ${styles.img14}`}>
            <Image src="/assets/coffee.png" alt="Hot coffee cup" fill className={styles.img} priority />
          </div>

          {/* The Giant UMEE Text Overlay */}
          <div className={styles.titleContainer}>
            <h1 className={styles.giantTitle}>UMEE</h1>
          </div>
        </div>
        
      </div>

      {/* SECTION 2: THE ETHOS (TWO COLUMNS) */}
      <div className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyGrid}>
            
            <div className={styles.storyTextCol}>
              <span className={styles.label}>01 // THE SLOW ETHOS</span>
              <h2 className={styles.storyHeading}>We measure time in drops, not seconds.</h2>
              <p className={styles.storyPara}>
                In a world that demands instant gratification, Umee is a sanctuary of patience. Our specialty Vietnamese Phin filter extraction takes exactly six minutes. It is a deliberate choice to slow down, to watch the droplets fall, and to embrace the stillness of the morning.
              </p>
              <p className={styles.storyPara}>
                Every single-origin Robusta bean we source from the volcanic soils of Đà Lạt represents a commitment to the heritage of slow drip culture, roasted with modern precision to draw out deep notes of cacao and roasted hazelnuts.
              </p>
            </div>
            
            <div className={styles.storyImgCol}>
              <div className={styles.interactiveImgWrapper}>
                <Image 
                  src="/assets/coffee.png" 
                  alt="UMEE Cup detail" 
                  fill 
                  className={styles.storyImg}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* SECTION 3: CORE VALUES (BENTO LAYOUT) */}
      <div className={styles.valuesContainer}>
        <span className={styles.labelCenter}>02 // OUR PILLARS</span>
        <h2 className={styles.valuesHeading}>What guides the drip.</h2>
        
        <div className={styles.bentoGrid}>
          
          <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
            <h3 className={styles.cardTitle}>Double-Sorted Highland Robusta</h3>
            <p className={styles.cardDesc}>
              We source exclusively from sustainable family farms in the Central Highlands of Vietnam. Each batch is double-sorted by hand, ensuring only the ripest, defect-free cherries make it to our custom convection roasters.
            </p>
            <div className={styles.cardImageWrapper}>
              <Image 
                src="/assets/heritage-2.png" 
                alt="Harvesting coffee" 
                fill 
                className={styles.cardInlineImg}
              />
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>The 6-Minute Rule</h3>
            <p className={styles.cardDesc}>
              Our baristas calibrate water temperatures to exactly 92°C, matching the specific density of our coarse-ground Robusta. The result is a thick, highly-concentrated extract with zero bitterness.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>Quiet Architecture</h3>
            <p className={styles.cardDesc}>
              Our physical spaces in Sydney, Melbourne, and Ho Chi Minh are designed using raw earth plaster, recycled cedar, and soft, indirect lighting—offering an escape from urban clutter.
            </p>
          </div>

        </div>
      </div>

      {/* SECTION 4: CALL TO ACTION */}
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.decorativeStar}>✦</div>
          <h2 className={styles.ctaTitle}>Experience the Ritual</h2>
          <p className={styles.ctaSub}>Discover our traditional phin brews, espresso blends, and curated pastries.</p>
          <Link href="/menu" className={styles.ctaButton}>
            EXPLORE THE MENU
          </Link>
        </div>
      </div>

    </section>
  );
}
