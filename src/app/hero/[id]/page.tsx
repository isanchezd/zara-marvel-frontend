'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import HeroBanner from '@/app/hero/[id]/components/hero-banner';
import getHero from '@/useCases/getHero';
import heroRepository from '@/app/repositories/heroHttpRepository';
import useLoading from '@/app/hooks/useLoading';
import styles from './page.module.css';
import FavoriteHero from '@/app/models/FavoriteHero';
import comicRepository from '@/app/repositories/comicHttpRepository';
import Comic from '@/domain/Comic';

export default function HeroDetailPage({ params }: { params: { id: number } }) {
  const { isLoading, setIsLoading } = useLoading()
  const pathname = usePathname()
  const id = Number(pathname.split('/')[2])
  const [hero, setHero] = useState<FavoriteHero>({} as FavoriteHero)
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    setIsLoading(true)
    const fetchHero = async () => {
      try {
        const data = await getHero(id, heroRepository, comicRepository)
        console.log(data)
        setHero({ ...data.hero, isFavorite: false })
        setComics([...data.comics])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchHero()
  }, [])

  const getYearFromModifiedDate = (dateStr: string) => new Date(dateStr).getFullYear()

  return (
    <section>
      {!isLoading ? (
        <div className={`${styles.layout}`}>
          <div className={`${styles.heroBannerLayout}`}>
            <HeroBanner hero={hero} />
          </div>
          <div className={`${styles.comicsSection}`}>
            <div>
              <h2 className={`${styles.comicsHead}`}>Comics</h2>
            </div>
            <div className={`${styles.comics}`}>
              {comics.map((comic) => (
                <article key={comic.id} className={`card ${styles.comic}`}>
                  <img
                    className='thumbnail'
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={`${comic.title} comic`}
                  />
                  <h3 className={`${styles.title}`}>{comic.title}</h3>
                  <span className={`${styles.date}`}>
                    {getYearFromModifiedDate(comic.modified)}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
