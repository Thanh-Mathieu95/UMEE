'use client';
import { useState, useCallback } from 'react';
import Intro from '@/components/Intro';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

import Gallery from '@/components/Gallery';
import GalleryShowcase from '@/components/GalleryShowcase';
import FanOutGallery from '@/components/FanOutGallery';
import ProjectShowcase from '@/components/ProjectShowcase';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      {!introComplete && <Intro onComplete={handleIntroComplete} />}
      <div className={`${styles.main} ${introComplete ? styles.visible : ''}`}>
        <Header />
        <div className={styles.sections}>
          <Hero />

          <ProjectShowcase />
          <GalleryShowcase />
          <Gallery />
          <FanOutGallery />
          <Location />
          <Footer />
        </div>
      </div>
    </>
  );
}
