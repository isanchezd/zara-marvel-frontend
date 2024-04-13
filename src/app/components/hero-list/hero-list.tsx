import HeroCard from './hero-card/hero-card';
import styles from './hero-list.module.css';
import Hero from '@/domain/Hero';

interface HeroListProps {
  heroes: Hero[]
}

export default function HeroList({ heroes }: HeroListProps) {
  return (
    <section className={`${styles.heroList}`}>
      {heroes.map((hero) => <HeroCard key={hero.id} hero={hero}/>)}
    </section>
  )
}