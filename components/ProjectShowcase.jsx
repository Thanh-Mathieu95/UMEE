'use client';
import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ProjectShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    year: '2025',
    title: 'UMEE SPACE',
    description: 'Where time slows down. A premium coffee experience in the heart of the city.',
    image: '/assets/gallery-4.png',
  },
  {
    id: 2,
    year: '2024',
    title: 'Arcworks Collective',
    description: 'Architectural design and spatial planning for modern urban living.',
    image: '/assets/gallery-1.png',
  },
  {
    id: 3,
    year: '2023',
    title: 'Coffee Rituals',
    description: 'Exploring the rich heritage and diverse flavors of world-class coffee beans.',
    image: '/assets/gallery-3.png',
  }
];

export default function ProjectShowcase() {
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(`.${styles.projectSection}`);
      const contents = gsap.utils.toArray(`.${styles.textContent}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%", // 300% of viewport height for 3 projects
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      });

      // Initial State: Increasing Z-Index for stacking effect
      // Project 2 is on top of Project 1, Project 3 on top of Project 2
      sections.forEach((section, i) => {
        if (i === 0) return;
        gsap.set(section, { yPercent: 100 });
        gsap.set(contents[i], { opacity: 0, y: 50 });
      });

      // Stacking Logic: Next project slides SOLIDLY over the current one
      sections.forEach((section, i) => {
        if (i === sections.length - 1) return;

        const nextSection = sections[i + 1];
        const currentContent = contents[i];
        const nextContent = contents[i + 1];

        // Current project stays opaque, next slides OVER it
        tl.to(currentContent, { opacity: 0, y: -50, ease: "none" }, i)
          .to(nextSection, { yPercent: 0, ease: "none" }, i)
          .to(nextContent, { opacity: 1, y: 0, ease: "none" }, i);
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.mainWrapper} ref={triggerRef}>
      <div className={styles.container}>
        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className={styles.projectSection} 
            style={{ zIndex: i + 1 }} // Increasing z-index for "stacking over" effect
          >
            <div className={styles.layout}>
              <div className={styles.imageColumn}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className={styles.projectImage} 
                    priority={i === 0}
                  />
                </div>
              </div>

              <div className={styles.textColumn}>
                <div className={styles.textContent}>
                  <span className={styles.year}>/{project.year}</span>
                  <h2 className={styles.projectName}>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.viewLink}>Explore Experience —</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
