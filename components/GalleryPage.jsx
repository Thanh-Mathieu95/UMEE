'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './GalleryPage.module.css';

const GALLERY_IMAGES = [
  { src: '/assets/gallery-art.png', alt: 'UMEE Art Space' },
  { src: '/assets/gallery-2.png', alt: 'Morning Latte Ritual' },
  { src: '/assets/gallery-cafe.png', alt: 'UMEE Cafe Atmosphere' },
  { src: '/assets/gallery-bag.png', alt: 'UMEE Brand Specialty Bag' }
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handlePrev = useCallback(() => {
    setSelectedIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <span className={styles.label}>03 // THE VISUALS</span>
          <h1 className={styles.heading}>UMEE IN FRAMES</h1>
          <p className={styles.subheading}>
            A visual record of slow mornings, hand-sorted cherries, and the art of the phin drip.
          </p>
        </div>

        {/* 3-Column Editorial Grid matching UMEE Homepage layout */}
        <div className={styles.grid}>
          
          {/* Left Column - Tall Image */}
          <div className={styles.column}>
            <div className={`${styles.imageWrapper} ${styles.tall}`} onClick={() => setSelectedIdx(0)}>
              <Image 
                src="/assets/gallery-art.png" 
                alt="UMEE Art Space" 
                fill 
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.img} 
                priority
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>UMEE Art Space</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Two Stacked Landscape Images */}
          <div className={`${styles.column} ${styles.middleCol}`}>
            <div className={`${styles.imageWrapper} ${styles.wide}`} onClick={() => setSelectedIdx(1)}>
              <Image 
                src="/assets/gallery-2.png" 
                alt="Morning Latte Ritual" 
                fill 
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.img} 
                priority
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>Morning Latte Ritual</span>
              </div>
            </div>
            <div className={`${styles.imageWrapper} ${styles.wide}`} onClick={() => setSelectedIdx(2)}>
              <Image 
                src="/assets/gallery-cafe.png" 
                alt="UMEE Cafe Atmosphere" 
                fill 
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.img} 
                priority
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>UMEE Cafe Atmosphere</span>
              </div>
            </div>
          </div>

          {/* Right Column - Tall Image */}
          <div className={styles.column}>
            <div className={`${styles.imageWrapper} ${styles.tall}`} onClick={() => setSelectedIdx(3)}>
              <Image 
                src="/assets/gallery-bag.png" 
                alt="UMEE Brand Specialty Bag" 
                fill 
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={styles.img} 
                priority
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>UMEE Brand Specialty Bag</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Fullscreen Viewer */}
      {selectedIdx !== null && (
        <div className={styles.lightbox} onClick={() => setSelectedIdx(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedIdx(null)} aria-label="Close Lightbox">
            &times;
          </button>
          
          <button className={styles.prevBtn} onClick={(e) => { e.stopPropagation(); handlePrev(); }} aria-label="Previous Image">
            &#8249;
          </button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImgWrapper}>
              <Image 
                src={GALLERY_IMAGES[selectedIdx].src} 
                alt={GALLERY_IMAGES[selectedIdx].alt}
                fill
                sizes="100vw"
                className={styles.lightboxImg}
                priority
              />
            </div>
            <p className={styles.lightboxCaption}>{GALLERY_IMAGES[selectedIdx].alt}</p>
          </div>

          <button className={styles.nextBtn} onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Next Image">
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
