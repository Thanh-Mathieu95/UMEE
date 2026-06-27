'use client';
import Header from '@/components/Header';
import GalleryPage from '@/components/GalleryPage';
import styles from '../page.module.css';

export default function GalleryRoute() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sections} style={{ opacity: 1 }}>
        <GalleryPage />
      </div>
    </div>
  );
}
