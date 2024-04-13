import React from 'react';
import Hero from '@/domain/Hero';
import styles from './hero-card.module.css';

interface HeroCardProps {
  hero: Hero
}

export default function HeroCard({ hero }: HeroCardProps) {
    return (
      <article className={`${styles.card} ${styles.cardBg}`}>
        <header>
          <img
            className={`${styles.thumbnail}`}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={`${hero.name} picture`}
          />
        </header>
        <section className={`${styles.cardContent}`}>
          <span className={`${styles.name}`}>{hero.name}</span>
          <img className={`${styles.favorite}`} src='/icon-heart-default.png' alt='add-favorite' />
        </section>
      </article> 
    )
}