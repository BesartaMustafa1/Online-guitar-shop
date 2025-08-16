'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './brandsstrip.module.css';

const BRANDS = [
  { name: 'Ibanez', slug: 'ibanez',img: '/photos/ibanez.svg' },
  { name: 'Gibson', img: '/photos/logo2.svg' },
  { name: 'Fender', img: '/photos/logo3.svg' },
  { name: 'Gretsch', img: '/photos/logo4.svg' },
  { name: 'ESP', img: '/photos/logo5.png' },
  { name: 'Taylor', img: '/photos/logo6.png' },
  { name: 'Jackson', img: '/photos/logo7.png' },
  { name: 'Schecter', img: '/photos/logo8.png' }
];
export default function BrandsStrip() {
  return (
    <section id="brands" className={styles.wrap}>
      <h3 className={styles.title}>
        Featuring the <span className={styles.accent}>Best Brands</span>
      </h3>
      <p className={styles.sub}>
        Select your preferred brand and explore our exquisite collection.
      </p>

      <div className={styles.grid}>
  {BRANDS.map(b => (
    <Link key={b.name} href={`/brand/${b.slug}`} className={styles.cell}>
      <Image
        src={b.img}
        alt={b.name}
        width={220}
        height={90}
        className={styles.logo}
        priority
      />
    </Link>
  ))}

      </div>
    </section>
  );
}
