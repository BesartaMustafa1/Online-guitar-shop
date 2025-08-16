import Link from 'next/link';
import styles from './cards.model.css';

export default function ModelCard({
  brandId,
  id,
  name,
  type,
  image
}: {
  brandId: string;
  id: string;
  name: string;
  type?: string;
  image?: string;
}) {
  return (
    <Link
      href={`/${encodeURIComponent(brandId)}/${encodeURIComponent(id)}`}
      className={styles.card}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.thumb}
        src={image ?? '/placeholder-model.png'}
        alt={name}
      />
      <div>
        <h3 className={styles.title}>{name}</h3>
        {type && <div className={styles.meta}>{type}</div>}
      </div>
    </Link>
  );
}
