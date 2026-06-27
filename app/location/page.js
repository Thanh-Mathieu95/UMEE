'use client';
import Header from '@/components/Header';
import Location from '@/components/Location';
import styles from '../page.module.css';

export default function LocationPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sections} style={{ opacity: 1 }}>
        <Location />
      </div>
    </div>
  );
}
