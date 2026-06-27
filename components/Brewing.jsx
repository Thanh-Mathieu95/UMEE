'use client';
import { useEffect, useRef } from 'react';
import styles from './Brewing.module.css';

const STEPS = [
  { num: '01', title: 'The Grind',  desc: 'Medium-coarse Vietnamese Robusta, freshly ground each morning.' },
  { num: '02', title: 'The Pour',   desc: 'Hot water at exactly 94°C poured gently over the grounds.' },
  { num: '03', title: 'The Wait',   desc: '4–6 minutes of slow, patient dripping. Time slows at UMEE.' },
  { num: '04', title: 'The Moment', desc: 'Pour over ice and condensed milk. Breathe. This is UMEE.' },
];

export default function Brewing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const steps = sectionRef.current?.querySelectorAll('[data-step]');
    if (!steps) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        steps.forEach((s, i) => setTimeout(() => s.classList.add(styles.visible), i * 200));
        io.disconnect();
      }
    }, { threshold: 0.25 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="brewing" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.tag}>04 — The Brewing Story</p>
          <h2 className={styles.title}>The Art of<br /><em>the Phin</em></h2>
          <p className={styles.desc}>
            In Vietnam, coffee is not fast. It drips slowly through the silver filter —
            drop by drop, moment by moment. The phin is not a tool. It is a ritual of patience.
          </p>
          <div className={styles.steps}>
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className={styles.step} data-step>
                <span className={styles.num}>{num}</span>
                <div className={styles.info}>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <svg viewBox="0 0 200 360" fill="none" className={styles.phin} aria-label="Vietnamese Phin filter illustration">
            <ellipse cx="100" cy="350" rx="30" ry="5" fill="#B5833E" opacity="0.12"/>
            <path d="M55 240L65 350H135L145 240Z" fill="#F8F2E2" stroke="#B5833E" strokeWidth="1.5"/>
            <path d="M58 300L63 350H137L142 300Z" fill="#550100" opacity="0.9"/>
            <path d="M70 300Q100 294 130 300" stroke="#F8F2E2" strokeWidth="2" strokeDasharray="4 3" opacity="0.55"/>
            <rect x="65" y="130" width="70" height="110" rx="4" fill="#C0A878" stroke="#B5833E" strokeWidth="1.5"/>
            <rect x="72" y="138" width="56" height="12" rx="3" fill="#A08858" stroke="#B5833E" strokeWidth="1"/>
            <rect x="60" y="118" width="80" height="14" rx="4" fill="#B5833E" stroke="#8a6530" strokeWidth="1"/>
            <rect x="92" y="104" width="16" height="16" rx="8" fill="#B5833E" stroke="#8a6530" strokeWidth="1"/>
            <line x1="100" y1="240" x2="100" y2="270" stroke="#550100" strokeWidth="2" opacity="0.55" className={styles.dripLine}/>
            <ellipse cx="100" cy="276" rx="4" ry="5" fill="#550100" opacity="0.7" className={styles.dripDrop}/>
            <path d="M78 104C76 88 82 76 78 62" stroke="#B5833E" strokeWidth="1.5" fill="none" opacity="0.45" className={styles.steam}/>
            <path d="M100 104C98 86 104 72 100 58" stroke="#B5833E" strokeWidth="1.5" fill="none" opacity="0.35" className={styles.steam} style={{animationDelay:'0.8s'}}/>
            <path d="M122 104C120 88 126 76 122 62" stroke="#B5833E" strokeWidth="1.5" fill="none" opacity="0.45" className={styles.steam} style={{animationDelay:'1.6s'}}/>
          </svg>
        </div>
      </div>
    </section>
  );
}
