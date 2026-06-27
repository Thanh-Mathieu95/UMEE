'use client';
import { useEffect, useRef } from 'react';
import styles from './VideoScroll.module.css';

export default function VideoScroll() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();

    const handleScroll = () => {
      if (!containerRef.current || !video.duration) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;
      let scrollFraction = currentScroll / totalHeight;

      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      video.currentTime = video.duration * scrollFraction;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className={styles.videoSection}>
      <div className={styles.stickyWrapper}>
        <video
          ref={videoRef}
          className={styles.video}
          muted
          playsInline
          preload="auto"
          src="/assets/Make_image_particles_umee.mp4"
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>BREWING PERFECTION</h2>
          <p className={styles.subtitle}>Scroll to see the magic unfold</p>
        </div>
      </div>
    </section>
  );
}
