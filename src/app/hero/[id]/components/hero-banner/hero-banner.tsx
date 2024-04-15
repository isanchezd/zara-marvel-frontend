'use client'

import React from 'react'
import styles from './hero-banner.module.css'
import FavoriteHero from '@/app/models/FavoriteHero'
import useAddFavoriteHero from '@/app/hooks/useAddFavorites'

interface HeroBannerProps {
  hero: FavoriteHero
}

export default function HeroBanner({ hero }: HeroBannerProps) {
  const [heroState, setHeroState] = useAddFavoriteHero(hero)

  const onClickToogleFavorite = (event: React.FormEvent) => {
    setHeroState({ ...hero, isFavorite: !heroState.isFavorite })
  }

  return (
    <div className={`container ${styles.banner}`}>
      <div className='row justify-center align-center'>
        <img
          className={`${styles.thumbnail}`}
          src={`${heroState.thumbnail.path}.${heroState.thumbnail.extension}`}
          alt={`${heroState.name} picture`}
        />
      </div>
      <div className={`col justify-center p-2 gap`}>
        <div className='row space-between align-center gap'>
          <h1>{heroState.name}</h1>
          {heroState.isFavorite ? (
            <i onClick={onClickToogleFavorite}>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
                  fill='#EC1D24'
                />
              </svg>
            </i>
          ) : (
            <i onClick={onClickToogleFavorite}>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 1.64453L4.51885 0.789665L4 0.474757L3.48115 0.789666L4 1.64453ZM7 3.46534L6.48115 4.32021L7 4.63511L7.51885 4.32021L7 3.46534ZM1 3.46534L0.481151 2.61047L0 2.9025V3.46534H1ZM1 7.36707H0V7.8286L0.351203 8.12804L1 7.36707ZM7 12.4827L6.3512 13.2436L7 13.7968L7.6488 13.2436L7 12.4827ZM13 7.36707L13.6488 8.12804L14 7.8286V7.36707H13ZM13 3.46534H14V2.9025L13.5188 2.61047L13 3.46534ZM10 1.64453L10.5189 0.789666L10 0.474757L9.48115 0.789665L10 1.64453ZM3.48115 2.4994L6.48115 4.32021L7.51885 2.61047L4.51885 0.789665L3.48115 2.4994ZM1.51885 4.32021L4.51885 2.4994L3.48115 0.789666L0.481151 2.61047L1.51885 4.32021ZM2 7.36707V3.46534H0V7.36707H2ZM7.6488 11.7217L1.6488 6.60611L0.351203 8.12804L6.3512 13.2436L7.6488 11.7217ZM7.6488 13.2436L13.6488 8.12804L12.3512 6.60611L6.3512 11.7217L7.6488 13.2436ZM14 7.36707V3.46534H12V7.36707H14ZM13.5188 2.61047L10.5189 0.789666L9.48115 2.4994L12.4812 4.32021L13.5188 2.61047ZM9.48115 0.789665L6.48115 2.61047L7.51885 4.32021L10.5189 2.4994L9.48115 0.789665Z'
                  fill='#FFF'
                />
              </svg>
            </i>
          )}
        </div>
        <div>
          <p>{heroState.description}</p>
        </div>
      </div>
    </div>
  )
}
