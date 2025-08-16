'use client';

import { use, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './brand.module.css';
import Footer from '@/app/Footer';

const GUITAR_TYPES = ['Electric', 'Acoustic', 'Bass', 'Hybrid'] as const;
type GuitarType = (typeof GUITAR_TYPES)[number];

type Model = {
  id: number;
  name: string;
  price: string;
  img: string;
  type: GuitarType;
};

const MOCK_MODELS: Model[] = [
  { id: 1, name: 'The Essential Les Paul',        price: '$1,299.00', img: '/photos/LesPaul.png',       type: 'Electric' },
  { id: 2, name: 'J-45 Standard',                 price: '$1,699.00', img: '/photos/J-45.png',          type: 'Acoustic' },
  { id: 3, name: 'Hummingbird Standard',          price: '$2,099.00', img: '/photos/Hummingbird.png',   type: 'Acoustic' },
  { id: 4, name: 'Active Precision Bass® PH V',   price: '$4,199.00', img: '/photos/Active.png',        type: 'Bass' },
  { id: 5, name: 'Redondo Special',               price: '$2,800.00', img: '/photos/Redondo.png',       type: 'Acoustic' },
  { id: 6, name: 'Professional II Stratocaster®', price: '$3,199.00', img: '/photos/Stratocaster®.png', type: 'Electric' },
];

export default function BrandModelsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const brandName = slug.charAt(0).toUpperCase() + slug.slice(1);

  // state: filter + search
  const [selectedType, setSelectedType] = useState<GuitarType | ''>('');
  const [query, setQuery] = useState('');

  // computed list after filter & search
  const filteredModels = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_MODELS.filter(m => {
      const okType = selectedType ? m.type === selectedType : true;
      const okText = q ? m.name.toLowerCase().includes(q) : true;
      return okType && okText;
    });
  }, [selectedType, query]);

  return (
    <main className={styles.page}>
      {/* top header + bowl */}
      <header className={styles.top}>
        <Link href="/" className={styles.back}>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          Back to home
        </Link>

        <div className={styles.brandRow}>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <path
              fillRule="evenodd" clipRule="evenodd"
              d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0855 13.7657 5.9331 14.1497 13.2738C14.5287 6.0299 20.5459 0.2399 28 0.0064V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
              fill="#FF6428"
            />
          </svg>
          <span className={styles.brandName}>VibeStrings</span>
        </div>

        <div className={styles.bowl}>
          <div className={styles.bowlInner}>
            <span className={styles.bowlBrand}>{brandName}</span>
          </div>
          <div className={styles.bowlBadge}>
            <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true">
              <path
                fillRule="evenodd" clipRule="evenodd"
                d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0855 13.7657 5.9331 14.1497 13.2738C14.5287 6.0299 20.5459 0.2399 28 0.0064V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
                fill="#FF6428"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* intro */}
      <section className={styles.intro}>
        <h1 className={styles.h1}>
          Play like a <span className={styles.accent}>Rock star</span>
        </h1>
        <p className={styles.lead}>
          With a legacy dating back to the 1950s, {brandName} blends expert craftsmanship with cutting-edge
          innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top
          artists worldwide, {brandName} guitars are built to play fast, sound bold, and stand out on any stage.
        </p>
      </section>

      {/* filters + grid */}
      <section className={styles.selection}>
        <h2 className={styles.selectionTitle}>
          Check out the <span className={styles.accent}>Selection</span>
        </h2>

        <div className={styles.filters}>
          {/* FILTER */}
          <label
            className={`${styles.filterBox} ${selectedType ? styles.active : ''}`}
            data-empty={selectedType === ''}    
          >
            <span className={styles.filterIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M27.0733 4.9873H4.42652C3.67286 4.9873 3.2022 5.80864 3.58057 6.46387L10.7357 18.6271V26.0283C10.7357 26.5728 11.1726 27.0127 11.714 27.0127H19.7858C20.3273 27.0127 20.7641 26.5728 20.7641 26.0283V18.6271L27.9223 6.46387C28.2976 5.80864 27.827 4.9873 27.0733 4.9873ZM18.5615 24.7979H12.9383V19.999H18.5646V24.7979H18.5615Z" fill="#BFBFBF"/>
              </svg>
            </span>

            <select
              className={styles.select}
              value={selectedType}
              onChange={(e) => setSelectedType((e.target.value || '') as GuitarType | '')}
            >
              <option value="">Filter by type</option>
              {GUITAR_TYPES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <span className={styles.chev} aria-hidden="true">▾</span>
          </label>

          {/* SEARCH */}
          <label className={styles.searchBox}>
            <span className={styles.searchIcon} aria-hidden="true">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path d="M28.5043 26.3103L20.5114 18.3174C21.7517 16.7139 22.4227 14.7533 22.4227 12.6912C22.4227 10.2229 21.4593 7.90839 19.7173 6.1633C17.9753 4.41821 15.6547 3.45795 13.1894 3.45795C10.7241 3.45795 8.40348 4.42128 6.66147 6.1633C4.91638 7.90531 3.95612 10.2229 3.95612 12.6912C3.95612 15.1565 4.91945 17.4771 6.66147 19.2191C8.40348 20.9642 10.721 21.9245 13.1894 21.9245C15.2515 21.9245 17.2089 21.2535 18.8125 20.0163L26.8054 28.0061C26.8567 28.0482 26.9179 28.0801 26.9839 28.0801C27.0499 28.0801 27.1111 28.0482 27.1624 28.0061L28.5043 26.6673Z" fill="#BFBFBF"/>
              </svg>
            </span>
            <input
              className={styles.input}
              placeholder="Search by name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {filteredModels.map(m => (
            <article key={m.id} className={styles.card}>
              <div className={styles.thumb}>
                <Image src={m.img} alt={m.name} fill className={styles.img} />
              </div>
              <div className={styles.meta}>
                <h3 className={styles.name}>{m.name}</h3>
                <div className={styles.price}>{m.price}</div>
              </div>
            </article>
          ))}
        </div>

        {/* pagination (visual only) */}
        <nav className={styles.pagination} aria-label="pagination">
          <button className={styles.pageBtn} aria-label="Prev">‹</button>
          <button className={`${styles.pageNum} ${styles.active}`}>1</button>
          <span className={styles.ellipsis}>…</span>
          <button className={styles.pageNum}>4</button>
          <button className={styles.pageNum}>5</button>
          <button className={styles.pageNum}>6</button>
          <button className={styles.pageNum}>7</button>
          <button className={styles.pageNum}>8</button>
          <button className={styles.pageBtn} aria-label="Next">›</button>
          <button className={styles.pageNum}>50</button>
        </nav>

        <p className={styles.results}>
          SHOWING {filteredModels.length} RESULT{filteredModels.length === 1 ? '' : 'S'} FROM {MOCK_MODELS.length}
        </p>
      </section>

      <Footer />
    </main>
  );
}
