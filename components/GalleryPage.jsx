'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './GalleryPage.module.css';

const GALLERY_IMAGES = [
  { src: '/assets/gallery-1.png', alt: 'Art gallery space' },
  { src: '/assets/gallery-2.png', alt: 'Holding fresh hot latte' },
  { src: '/assets/gallery-3.png', alt: 'Pouring hot water onto phin filter' },
  { src: '/assets/gallery-4.png', alt: 'Fresh coffee cherries in basket' },
  { src: '/assets/gallery-5.png', alt: 'Coffee roasters setup' },
  { src: '/assets/gallery-6.png', alt: 'Barista preparing double shot espresso' },
  { src: '/assets/gallery-7.png', alt: 'Espresso machine detail' },
  { src: '/assets/gallery-8.png', alt: 'Signature coffee cup' },
  { src: '/assets/gallery-9.png', alt: 'Freshly roasted Robusta coffee beans' },
  { src: '/assets/gallery-10.png', alt: 'UMEE cafe shopfront' },
  { src: '/assets/gallery-cafe.png', alt: 'Quiet cafe seating area' },
  { src: '/assets/gallery-bag.png', alt: 'UMEE specialty coffee bags' },
  { src: '/assets/phin-coffee.png', alt: 'Slow drip phin coffee extraction' },
  { src: '/assets/coffee.png', alt: 'Hot coffee cup on table' },
  { src: '/assets/gallery-v1.png', alt: 'Aura Roasters packaging close up' },
  { src: '/assets/gallery-v2.png', alt: 'Barista steaming milk pitcher' },
  { src: '/assets/gallery-v3.png', alt: 'Pour over coffee detail' },
  { src: '/assets/gallery-v4.png', alt: 'Robusta green coffee beans sorting' }
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

        {/* Masonry / Dense Grid */}
        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={styles.gridItem} 
              onClick={() => setSelectedIdx(idx)}
            >
              <div className={styles.imgWrapper}>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.img} 
                />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
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
