'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './FanOutGallery.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FanOutGallery() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // 1. PINNING LOGIC: Pins the section when its top hits the top of viewport
    const pinner = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=1000", // The distance it stays pinned
      pin: container, // Pin the inner sticky wrapper
      pinSpacing: false, // We'll let the section height handle the space
    });

    // 2. ANIMATION TIMELINE: Starts early (when section top hits bottom of viewport)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom", // Early trigger
        end: "bottom top",   // Ends when section is completely gone
        scrub: 1.5,          // Smooth scrubbing
      }
    });

    // Initial state: Images and Text are clear from the start
    gsap.set([img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current], {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 0.7,
      opacity: 1 // Always clear
    });
    gsap.set(textRef.current, { opacity: 1, scale: 1 });

    // Animation Sequence with updated rotation angles
    tl.to(img1Ref.current, { x: "-42vw", y: "-38vh", rotation: -22, scale: 1.15, ease: "none" }, 0)
      .to(img2Ref.current, { x: "42vw", y: "-35vh", rotation: 14, scale: 1.15, ease: "none" }, 0)
      .to(img3Ref.current, { x: "-38vw", y: "38vh", rotation: -12, scale: 1.15, ease: "none" }, 0)
      .to(img4Ref.current, { x: "38vw", y: "35vh", rotation: 25, scale: 1.15, ease: "none" }, 0)
      .to(textRef.current, { scale: 1.1, ease: "none" }, 0);




    return () => {
      // Clean up all triggers
      pinner.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const images = [
    { src: '/assets/gallery-1.png', ref: img1Ref },
    { src: '/assets/gallery-2.png', ref: img2Ref },
    { src: '/assets/gallery-v1.png', ref: img3Ref },
    { src: '/assets/gallery-3.png', ref: img4Ref },
  ];

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.stickyWrapper} ref={containerRef}>
        {/* Background images fanning out */}
        <div className={styles.imageContainer}>
          {images.map((img, i) => (
            <div key={i} ref={img.ref} className={styles.imageWrapper}>
              <Image src={img.src} alt={`Fan out ${i}`} fill className={styles.img} priority />
            </div>
          ))}
        </div>

        {/* Content on top */}
        <div className={styles.content} ref={textRef}>
          <h2 className={styles.title}>
            At Avexa Studio, <br />
            strategy meets design <br />
            to help brands grow <br />
            with confidence.
          </h2>
          <div className={styles.buttonContainer}>
            <button className={styles.cta}>Meet our team</button>
          </div>
        </div>
      </div>
    </section>
  );
}
