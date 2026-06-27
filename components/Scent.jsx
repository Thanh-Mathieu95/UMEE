'use client';
import { useEffect, useRef } from 'react';
import styles from './Scent.module.css';

const NOTES = ['Dark Chocolate', 'Roasted Hazelnut', 'Rich Earth', 'Warm Caramel', 'Aged Wood Smoke'];

export default function Scent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const notes = sectionRef.current?.querySelectorAll('[data-note]');
    if (!notes) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        notes.forEach((n, i) => setTimeout(() => n.classList.add(styles.visible), i * 180));
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="scent" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={`${styles.ring} ${styles.r1}`} />
          <div className={`${styles.ring} ${styles.r2}`} />
          <div className={`${styles.ring} ${styles.r3}`} />
          <svg className={styles.cup} viewBox="0 0 120 140" fill="none" aria-label="Coffee cup">
            <path d="M20 60L28 120H92L100 60Z" fill="#550100" opacity="0.9"/>
            <path d="M100 75Q118 75 118 88Q118 101 100 101" stroke="#B5833E" strokeWidth="3" fill="none"/>
            <ellipse cx="60" cy="60" rx="40" ry="8" fill="#3a0100"/>
            <path d="M50 44C48 30 52 18 60 16C68 18 72 30 70 44" stroke="#B5833E" strokeWidth="1.5" fill="none" className={styles.steam} style={{animationDelay:'0s'}}/>
            <path d="M60 44C58 26 64 14 60 10C62 16 66 30 60 44" stroke="#B5833E" strokeWidth="1.5" fill="none" className={styles.steam} style={{animationDelay:'0.9s'}}/>
            <path d="M70 44C72 30 76 18 70 16C74 20 78 32 70 44" stroke="#B5833E" strokeWidth="1.5" fill="none" className={styles.steam} style={{animationDelay:'1.8s'}}/>
          </svg>
        </div>

        <div className={styles.text}>
          <p className={styles.tag}>03 — The Scent of Umee</p>
          <h2 className={styles.title}>
            Before the first sip,<br /><em>there is the scent.</em>
          </h2>
          <ul className={styles.notes}>
            {NOTES.map((note, i) => (
              <li key={i} className={styles.note} data-note>
                <span className={styles.dot} />
                {note}
              </li>
            ))}
          </ul>
          <p className={styles.desc}>
            Rich, complex, and achingly familiar — the aroma of UMEE tells a story of origin,
            patience, and craft passed down through generations.
          </p>
        </div>
      </div>
    </section>
  );
}
