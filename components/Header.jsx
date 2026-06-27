'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Bar - Info */}
      <div className={styles.topBar}>
        <div className={styles.topContent}>
          <div className={styles.topItem}>UMEE / 0.1</div>
          <div className={styles.topItem}>SYDNEY • 23:45</div>
          <div className={styles.topItem}>EST. 2024</div>
          <div className={styles.topItem}>CÀ PHÊ VIỆT NAM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
            UMEE
          </Link>
          
          {/* Desktop Menu */}
          <div className={styles.menu}>
            <Link href="/menu" className={styles.menuItem}>MENU</Link>
            <Link href="/#gallery" className={styles.menuItem}>GALLERY</Link>
            <Link href="/location" className={styles.menuItem}>LOCATION</Link>
            <Link href="/about" className={styles.menuItem}>ABOUT US</Link>
          </div>

          {/* Hamburger Toggle Button (Mobile) */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <Link href="/menu" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
            MENU
          </Link>
          <Link href="/#gallery" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
            GALLERY
          </Link>
          <Link href="/location" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
            LOCATION
          </Link>
          <Link href="/about" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
            ABOUT US
          </Link>
        </div>
      </div>
    </header>
  );
}
