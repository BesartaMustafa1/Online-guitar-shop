import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        {/* Column 1: Brand & contact */}
        <div className={styles.footerColumn}>
          <div className={styles.brandRow}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.184 12.631C11.879 18.916 6.544 23.914 0 24V0c6.544.086 11.879 5.084 12.184 11.369C12.483 5.12 17.702.239 24 .006V23.994c-6.298-.233-11.517-5.114-11.816-11.363Z" fill="#FF6428"/>
            </svg>
            <span className={styles.brandName}>VibeStrings</span>
          </div>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                {/* mail */}
                <svg viewBox="0 0 24 24"><path d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 2-8 5L4 8" stroke="#666" strokeWidth="1.5" fill="none"/></svg>
              </span>
              Enquiry@VibeStrings.com
            </li>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                {/* location */}
                <svg viewBox="0 0 24 24"><path d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z" stroke="#666" strokeWidth="1.5" fill="none"/><circle cx="12" cy="10" r="2.8" stroke="#666" strokeWidth="1.5" fill="none"/></svg>
              </span>
              San Francisco
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className={styles.footerColumn}>
          <h4>PAGES</h4>
          <div className={styles.linkList}>
            <a className={styles.link} href="#">Store</a>
            <a className={styles.link} href="#">Collections</a>
            <a className={styles.link} href="#">Support</a>
          </div>
        </div>

        {/* Column 3 */}
        <div className={styles.footerColumn}>
          <h4>PRODUCT</h4>
          <div className={styles.linkList}>
            <a className={styles.link} href="#">Terms</a>
            <a className={styles.link} href="#">Privacy Policy</a>
            <a className={styles.link} href="#">Copyright</a>
          </div>
        </div>

        {/* Column 4 */}
        <div className={styles.footerColumn}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">
              {/* fb */}
              <svg viewBox="0 0 24 24"><path d="M14 9h-2V7c0-.6.4-1 1-1h1V4h-2a3 3 0 0 0-3 3v2H8v3h1v8h3v-8h2l1-3Z" fill="#111" opacity=".6"/></svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Twitter/X">
              <svg viewBox="0 0 24 24"><path d="M4 4l7 8-7 8h3l6-7 6 7h3l-7-8 7-8h-3l-6 7-6-7H4Z" fill="#111" opacity=".6"/></svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#111" opacity=".6"/><circle cx="12" cy="12" r="3.2" fill="#111" opacity=".6"/><circle cx="17" cy="7" r="1.2" fill="#111" opacity=".6"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Copyright: VibeStrings
      </div>
    </footer>
  );
}
