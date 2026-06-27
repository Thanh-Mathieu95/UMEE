'use client';
import Header from '@/components/Header';
import About from '@/components/About';
import styles from '../page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sections} style={{ opacity: 1 }}>
        <About />
      </div>
    </div>
  );
}
