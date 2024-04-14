'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import HeroBanner from '@/app/hero/[id]/components/hero-banner';
import getHero from '@/useCases/getHero';
import heroRepository from '@/app/repositories/heroHttpRepository';
import useLoading from '@/app/hooks/useLoading';
import styles from './page.module.css';
import FavoriteHero from '@/app/models/FavoriteHero';

export default function HeroDetailPage({ params }: { params: { id: number } }) {
  const { isLoading, setIsLoading } = useLoading()
  const pathname = usePathname()
  const id = pathname.split('/')[2]
  const [hero, setHero] = useState<FavoriteHero>({} as FavoriteHero)

  useEffect(() => {
    setIsLoading(true)
    const fetchHeroes = async () => {
      try {
        const data = await getHero(heroRepository, Number(id))
        setHero({...data, isFavorite: false})
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHeroes()
  }, [])


  return (
    <section>
      {!isLoading ? (
        <div className={`${styles.layout}`} >
          <div className={`${styles.heroBannerLayout}`}>
            <HeroBanner hero={hero} />
          </div>
          <div className={`${styles.comicsSection}`}>
            <h1 className={`${styles.comicsHead}`}>Comics</h1>
            <div>
              <article>Item</article>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
