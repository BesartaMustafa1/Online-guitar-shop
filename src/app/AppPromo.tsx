'use client';

import Image from 'next/image';
import styles from './apppromo.module.css';

export default function AppPromo() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {/* Kolona e majtë: tekst + butona */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            Browse and buy your <br />
            <span className={styles.accent}>favorite guitars</span> with <br />
            VibeStrings.
          </h2>

          <div className={styles.badges}>
            <a href="#" aria-label="Get it on Google Play" className={styles.store}>
              <Image
                src="/photos/google-pay.svg"
                alt=""
                width={180}
                height={54}
                priority
              />
            </a>
            <a href="#" aria-label="Download on the App Store" className={styles.store}>
              <Image
                src="/photos/app-store.svg"
                alt=""
                width={180}
                height={54}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.phones}>
            <Image
              src="/photos/guitars2.svg"
              alt="App feed screen"
              width={280}
              height={560}
              className={styles.phoneLeft}
              priority
            />
            <Image
              src="/photos/guitars1.svg"
              alt="Product screen"
              width={280}
              height={560}
              className={styles.phoneRight}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
