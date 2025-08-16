'use client';

import SearchBar from './SearchBar';
import TypeFilter from './TypeFilter';
import styles from './toolbar.module.css';

export default function Toolbar({
  search, setSearch, type, setType, countLabel
}:{
  search: string; setSearch: (v:string)=>void;
  type: string; setType: (v:string)=>void;
  countLabel?: string
}) {
  const TYPES = ['Electric','Acoustic','Bass','Classical'];

  return (
    <div className={styles.toolbar}>
      <div className={styles.group}>
        <label className={styles.label}>Filter by type</label>
        <TypeFilter value={type} onChange={setType} types={TYPES} />
      </div>
      <div className={styles.group}>
        <label className={styles.label}>Search by name</label>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      {countLabel && <span className={styles.counter}>{countLabel}</span>}
    </div>
  );
}
