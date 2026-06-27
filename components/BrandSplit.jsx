'use client';
import { useEffect, useRef } from 'react';
import styles from './BrandSplit.module.css';

export default function BrandSplit() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight;
      const end = -rect.height;
      const progress = (rect.top - start) / (end - start);
      
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const rotation = clampedProgress * 90;
      const scale = 1 - (Math.sin(clampedProgress * Math.PI) * 0.1);

      containerRef.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.darkHalf}>
          <h1 className={styles.massiveText}>UMEE</h1>
        </div>
        <div className={styles.lightHalf}>
          <div className={styles.info}>
            <div className={styles.row}>
              <div>
                <span className={styles.label}>LOCATION</span>
                <p className={styles.val}>Q1, Ho Chi Minh City</p>
              </div>
              <div>
                <span className={styles.label}>OPEN HOURS</span>
                <p className={styles.val}>Daily - 7AM - 10PM</p>
              </div>
            </div>
            <h2 className={styles.subtitle}>
              A PLACE WHERE<br />
              COFFEE MEETS<br />
              CULTURE.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
