'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './MusicPlayer.module.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.wrapper} onClick={togglePlay}>
      {/* Tonearm / Stylus */}
      <div className={`${styles.tonearm} ${isPlaying ? styles.tonearmActive : styles.tonearmInactive}`}>
        <div className={styles.armBody}></div>
        <div className={styles.headshell}></div>
      </div>

      {/* Vinyl Record */}
      <div className={`${styles.recordContainer} ${isPlaying ? styles.spinning : styles.spinning + ' ' + styles.paused}`}>
        <div className={styles.label}>
          <Image 
            src="/assets/decor.png" 
            alt="Record Cover" 
            fill 
            className={styles.coverImg}
            priority
          />
        </div>
        <div className={styles.centerHole}></div>
      </div>
    </div>
  );
}
