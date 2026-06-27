'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import MusicPlayer from './MusicPlayer';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className={styles.section} ref={sectionRef}>
      <div className={styles.bentoGrid}>
        
        {/* 01: Slow down - Spans 2 Columns, 2 Rows */}
        <div className={`${styles.card} ${styles.card01}`} style={{ '--delay': '0.1s' }}>
          <div className={styles.cardHeader}>01</div>
          <h1 className={styles.mainTitle}>
            Slow <br />
            down. <br />
            <span className={styles.italic}>Get lost.</span>
          </h1>
          <div className={styles.cardFooter}>
            <span>u mê / verb</span>
            <span>→ to be gently absorbed</span>
          </div>
        </div>

        {/* Featured Image - RESTORED as static image */}
        <div className={`${styles.card} ${styles.cardImage}`} style={{ '--delay': '0.2s' }}>
          <Image 
            src="/assets/phin-coffee.png" 
            alt="Phin No. 1" 
            fill
            className={styles.bgImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.featuredTag}>
              <span className={styles.tagLabel}>FEATURED</span>
              <span className={styles.tagTitle}>Phin No. 1</span>
            </div>
          </div>
        </div>

        {/* 02: Brew Time - REPLACED with MusicPlayer */}
        <div className={`${styles.card} ${styles.card02}`} style={{ '--delay': '0.3s', padding: 0 }}>
          <MusicPlayer />
        </div>

        {/* 03: Origins - Column 4, Row 2 */}
        <div className={`${styles.card} ${styles.card03}`} style={{ '--delay': '0.4s' }}>
          <div className={styles.cardHeader}>03</div>
          <div className={styles.cardContent}>
            <div className={styles.statLabel}>ORIGINS</div>
            <h2 className={styles.originTitle}>Đà <span className={styles.smallText}>Lạt</span></h2>
          </div>
          <p className={styles.cardDesc}>
            Single-origin Robusta from<br />
            the Vietnamese highlands.
          </p>
        </div>

        {/* 04: Cafés - Column 1, Row 3 */}
        <div className={`${styles.card} ${styles.card04}`} style={{ '--delay': '0.5s' }}>
          <div className={styles.cardHeader}>04</div>
          <div className={styles.cardContent}>
            <div className={styles.statLabel}>CAFÉS</div>
            <div className={styles.statValue}>3</div>
          </div>
          <p className={styles.cardDesc}>
            Sydney • Melbourne<br />
            Newtown opening soon.
          </p>
        </div>

        {/* Large Action Card - Spans 3 Columns, Row 3 */}
        <div className={`${styles.card} ${styles.cardAction}`} style={{ '--delay': '0.6s' }}>
          <div className={styles.actionContent}>
            <span className={styles.subLabel}>A SHARED EMOTIONAL MOMENT</span>
            <h2 className={styles.actionTitle}>Pull up a chair.</h2>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.btnPrimary}>See full menu</button>
            <button className={styles.btnSecondary}>
              Find a café <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>

      </div>


    </section>
  );
}
