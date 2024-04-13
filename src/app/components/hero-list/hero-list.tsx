import HeroCard from './hero-card/hero-card';
import styles from './hero-list.module.css';

export default function HeroList() {
    return (
      <section className={`${styles.heroList}`}>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </section>
    )
}