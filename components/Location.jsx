'use client';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.container}>
        
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <h2 className={styles.heading}>HOURS AND LOCATION</h2>
          <p className={styles.subheading}>Reach out and tell us what is on your mind.</p>
        </div>

        {/* Columns Grid */}
        <div className={styles.grid}>
          
          {/* Column 1: Email */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Email</h3>
            <a href="mailto:hello@umeecafe.com.au" className={styles.emailLink}>
              hello@umeecafe.com.au
            </a>
          </div>

          {/* Column 2: Address */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Address</h3>
            <p className={styles.textLine}>142 Crown Street, Surry Hills NSW 2010</p>
            <p className={styles.textLine}>653 Queensberry St, North Melbourne VIC 3051</p>
          </div>

          {/* Column 3: Opening Hours */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Opening Hours</h3>
            <p className={styles.textLine}>Weekdays: 7:30AM - 3:30PM</p>
            <p className={styles.textLine}>Saturday: 8:30AM - 4:30PM</p>
            <p className={styles.textLine}>Sunday: 9:00AM - 4:00PM</p>
          </div>

        </div>

        {/* Google Map Container */}
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.4608331398863!2d151.2132!3d-33.8824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae1a61cb6bf7%3A0x67c2df47ad5e9545!2s142%20Crown%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="480" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="UMEE Surry Hills Location Map"
            className={styles.mapIframe}
          />
        </div>

      </div>
    </section>
  );
}
