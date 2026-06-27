'use client';
import Header from '@/components/Header';
import GalleryShowcase from '@/components/GalleryShowcase';
import styles from '../page.module.css';

export default function GalleryRoute() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.sections} style={{ opacity: 1, paddingTop: '120px', background: 'var(--surface)' }}>
        <GalleryShowcase />
      </div>
    </div>
  );
}
