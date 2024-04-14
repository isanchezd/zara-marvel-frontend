'use client'

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
          <svg
            width='13'
            height='12'
            viewBox='0 0 13 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`${styles.iconFavorite}`}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
  
            />
          </svg>
        </section>
      </article>
    )
}
