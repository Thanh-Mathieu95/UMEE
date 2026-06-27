'use client';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section - Red Call to Action */}
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.ctaText}>
            <span className={styles.subLabel}>● PULL UP A CHAIR</span>
            <h2 className={styles.ctaTitle}>
              See you <br />
              <span className={styles.italic}>tomorrow?</span>
            </h2>
          </div>

          <div className={styles.ctaContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>VISIT US</span>
              <p className={styles.contactValue}>142 Crown Street, Surry Hills NSW 2010</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>SAY HELLO</span>
              <p className={styles.contactValue}>hello@umeecafe.com.au</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>FOLLOW US</span>
              <div className={styles.ctaSocials}>
                <a href="#" className={styles.ctaSocialLink} aria-label="Instagram">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className={styles.ctaSocialLink} aria-label="Facebook">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className={styles.ctaSocialLink} aria-label="TikTok">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
