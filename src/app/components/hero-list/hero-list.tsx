'use client';

import useFavoriteHeroes from '@/app/hooks/useFavoriteHeroes';
import HeroCard from './hero-card/hero-card';
import styles from './hero-list.module.css';
import Hero from '@/domain/Hero';
import FavoriteHero from '@/app/models/FavoriteHero';

interface HeroListProps {
  heroes: Hero[]
}

export default function HeroList({ heroes }: HeroListProps) {
  const { favorites } = useFavoriteHeroes()
  return (
    <section className={`${styles.heroList}`}>
      {heroes.map((hero) =>  {
        let isFavorite = false
        
        if(isHeroInFavorites(favorites, hero)) {
          isFavorite = true
        }

        const favoriteHero = { ...hero, isFavorite}
  
        return <HeroCard key={favoriteHero.id} hero={favoriteHero} />
      })}
    </section>
  )
}

function isHeroInFavorites(favorites: FavoriteHero[], hero: Hero) {
  return favorites.some((favorite) => {
    return favorite.id === hero.id
  })
}