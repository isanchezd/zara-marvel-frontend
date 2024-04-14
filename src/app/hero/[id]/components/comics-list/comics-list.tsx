import Comic from '@/domain/Comic'
import styles from './comics-list.module.css'

interface ComicsListProps {
  comics: Comic[]
}

export default function ComicsList({ comics }: ComicsListProps) {
  const getYearFromModifiedDate = (dateStr: string) => {
    const year = new Date(dateStr).getFullYear()
    return year ? year : ''
  }

  return (
    <div className={`${styles.comics}`}>
      {comics.map((comic) => (
        <article key={comic.id} className={`card ${styles.comic}`}>
          <img
            className='thumbnail'
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={`${comic.title} comic`}
          />
          <h3>{comic.title}</h3>
          <span className='text-dark'>
            {getYearFromModifiedDate(comic.modified)}
          </span>
        </article>
      ))}
    </div>
  )
}
