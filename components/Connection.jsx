'use client';
import Image from 'next/image';
import styles from './Connection.module.css';

const POSTS = [
  { src: '/assets/hero.png',       pos: 'center center',   id: 'ig-1' },
  { src: '/assets/coffee.png',     pos: 'center 30%',      id: 'ig-2' },
  { src: '/assets/terracotta.png', pos: 'center center',   id: 'ig-3' },
  { src: '/assets/terracotta.png', pos: '20% 80%',         id: 'ig-4' },
  { src: '/assets/hero.png',       pos: '60% 40%',         id: 'ig-5' },
  { src: '/assets/coffee.png',     pos: 'center 70%',      id: 'ig-6' },
];

export default function Connection() {
  return (
    <section id="connection" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>05 — Daily Connection</p>
        <h2 className={styles.title}>You &amp; Me,<br /><em>Every Day</em></h2>
        <p className={styles.sub}>Moments captured by our community at UMEE</p>
      </div>

      <div className={styles.grid}>
        {POSTS.map(({ src, pos, id }) => (
          <div key={id} id={id} className={styles.post}>
            <Image src={src} alt="UMEE community moment" fill style={{ objectFit: 'cover', objectPosition: pos }} sizes="33vw" />
            <div className={styles.hover}><span>@umee.coffee</span></div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="ig-follow-btn" className={styles.btn}>
          Follow @umee.coffee
        </a>
      </div>
    </section>
  );
}
