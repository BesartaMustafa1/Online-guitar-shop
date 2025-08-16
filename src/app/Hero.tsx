'use client';

import styles from './hero.module.css';
import Image from 'next/image';
import guitar from '@/photo/guitar1.jpg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.headline}>
        
      <div className={styles.logoRow}>
     
  <svg 
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg" 
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0854653 13.7657 5.9331 14.1497 13.2738C14.5287 6.02987 20.5459 0.239902 28 0.00640446V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
      fill="#FF6428"
    />
  </svg>
  <span className={styles.brandName}>VibeStrings</span>
</div>


        <h1>
          Browse top quality <br></br> <span className={styles.accent}>Guitars</span> online
        </h1>
        <p className={styles.sub}>
        Explore 50k+ latest collections of branded guitars </p><p className={styles.sub} >online with VibeStrings.
        </p>
      </div>

      <div className={styles.visual}>
  <div className={styles.frame}>
    <Image
      src={guitar}
      alt="Guitar & amp"
      className={styles.photo}
      fill
      priority
    />
  </div>

  <div className={styles.badge} aria-hidden="true">
    <svg viewBox="0 0 28 28" className={styles.badgeIcon}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0854653 13.7657 5.9331 14.1497 13.2738C14.5287 6.02987 20.5459 0.239902 28 0.00640446V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
        fill="#FF6428"
      />
    </svg>
  </div>
</div>
    </section>
  );
}
