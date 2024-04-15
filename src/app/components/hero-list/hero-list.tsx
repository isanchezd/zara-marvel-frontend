'use client';

import useFavoriteHeroes from '@/app/hooks/useFavoriteHeroes';
import HeroCard from './hero-card/hero-card';
import styles from './hero-list.module.css';
import Hero from '@/domain/Hero';
import useHeroesFactory from '@/app/hooks/useHeroesFactory'

interface HeroListProps {
  heroes: Hero[]
}

export default function HeroList({ heroes }: HeroListProps) {
  const { favorites } = useFavoriteHeroes()
  const newHeroes = useHeroesFactory(heroes, favorites)

  return (
    <section className={`${styles.heroList}`}>
      {newHeroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero} />
      })}
    </section>
  )
}