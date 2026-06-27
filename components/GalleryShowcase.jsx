'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GalleryShowcase.module.css';

export default function GalleryShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(`.${styles.item}`);
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    { src: '/assets/gallery-1.png', size: 'large', title: 'PURE ESSENCE', desc: 'The heart of our roast.' },
    { src: '/assets/gallery-2.png', size: 'small', title: 'RITUAL', desc: 'Morning calm.' },
    { src: '/assets/gallery-v1.png', size: 'tall', title: 'CRAFT', desc: 'Handled with care.' },
    { src: '/assets/gallery-5.png', size: 'small', title: 'AROMA', desc: 'Deep scents.' },
    { src: '/assets/gallery-v2.png', size: 'tall', title: 'HERITAGE', desc: 'Vietnamese roots.' },
    { src: '/assets/gallery-3.png', size: 'wide', title: 'BREW', desc: 'The slow process.' },
    { src: '/assets/gallery-7.png', size: 'small', title: 'SOUL', desc: 'Bold & rich.' },
    { src: '/assets/gallery-v3.png', size: 'tall', title: 'MOMENT', desc: 'Stillness found.' },
    { src: '/assets/gallery-9.png', size: 'small', title: 'SCENT', desc: 'Morning air.' },
    { src: '/assets/gallery-v4.png', size: 'tall', title: 'SPIRIT', desc: 'Our signature.' },
    { src: '/assets/gallery-10.png', size: 'wide', title: 'BALANCE', desc: 'Perfectly poised.' },
    { src: '/assets/gallery-4.png', size: 'huge', title: 'UMEE SPACE', desc: 'Where time slows down.' },
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.grid}>
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.item} ${styles[item.size]}`}
            style={{ '--delay': `${(index % 4) * 0.1}s` }}
          >
            <Image 
              src={item.src} 
              alt={item.title} 
              fill 
              className={styles.img} 
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
