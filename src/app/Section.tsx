import styles from './section.module.css';
export default function Section({ id, title, children }:{
  id?: string; title?: string; children: React.ReactNode
}) {
  return (
    <section id={id} className={styles.section}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </section>
  );
}
