'use client'

import React from 'react'
import HeroBanner from '@/app/hero/[id]/components/hero-banner'
import ComicsList from './components/comics-list'
import useGetHero from './hooks/useGetHero'

export default function HeroDetailPage() {
  const { hero, comics, isLoading } = useGetHero()

  return (
    <section>
      {!isLoading && hero.id ? (
        <div className='col justify-center align-center gap'>
          <div
            className={`full-container col justify-center align-center bg-dark`}
          >
            <HeroBanner hero={hero} />
          </div>
          <div className={`container col justify-center gap`}>
            <div>
              <h2 className='text-dark'>Comics</h2>
            </div>
            <ComicsList comics={comics} />
          </div>
        </div>
      ) : null}
    </section>
  )
}
