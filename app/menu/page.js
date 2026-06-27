'use client';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import styles from '../page.module.css';

export default function MenuPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sections} style={{ opacity: 1 }}>
        <Menu />
      </div>
    </div>
  );
}
