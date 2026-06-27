'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Intro.module.css';

// Logo color variants — each logo on a tonally matched background
const LOGOS = [
  { src: '/assets/logo-cream.png', bg: '#550100', skipColor: '#F8F2E2', key: 'cream', filter: 'none'  }, // cream on deep red
  { src: '/assets/logo-red.png',   bg: '#F8F2E2', skipColor: '#550100', key: 'red',   filter: 'none'  }, // red on warm cream
  { src: '/assets/logo-dark.png',  bg: '#EDE0C4', skipColor: '#3A3D1A', key: 'dark',  filter: 'none'  }, // olive green on warm sand
];

export default function Intro({ onComplete }) {
  // phase: 'enter' | 'cycle' | 'zoom'
  const [phase,      setPhase]      = useState('enter');
  const [logoIndex,  setLogoIndex]  = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Step 1 — fade logo in
    const t1 = setTimeout(() => setLogoVisible(true), 200);

    // Step 2 — cycle through color variants
    const t2 = setTimeout(() => { setLogoIndex(1); }, 950);
    const t3 = setTimeout(() => { setLogoIndex(2); }, 1750);

    // Step 3 — zoom through & exit
    const t4 = setTimeout(() => setPhase('zoom'),    2600);
    const t5 = setTimeout(() => onComplete(),         3300);

    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onComplete]);



  const current = LOGOS[logoIndex];

  return (
    <div
      className={`${styles.overlay} ${phase === 'zoom' ? styles.fadeOut : ''}`}
      style={{ background: current.bg }}
    >
      {/* Logo image — cycles src to change color variant */}
      <div
        className={`${styles.logoWrap} ${logoVisible ? styles.logoVisible : ''} ${phase === 'zoom' ? styles.zoomThrough : ''}`}
      >
        <Image
          src={current.src}
          alt="UMEE CAFE"
          width={420}
          height={220}
          priority
          className={styles.logoImg}
          style={{ filter: current.filter }}
          key={current.key}
        />
      </div>


    </div>
  );
}
