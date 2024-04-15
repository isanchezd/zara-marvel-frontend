'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HeroBanner from '@/app/hero/[id]/components/hero-banner';
import getHero from '@/useCases/getHero';
import heroRepository from '@/app/repositories/heroHttpRepository';
import useLoading from '@/app/hooks/useLoading';
import FavoriteHero from '@/app/models/FavoriteHero';
import comicRepository from '@/app/repositories/comicHttpRepository';
import Comic from '@/domain/Comic';
import ComicsList from './components/comics-list';


export default function HeroDetailPage() {
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
        setHero({ ...data.hero, isFavorite: false })
        setComics([...data.comics])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHero()
  }, [id])


  return (
    <section>
      { !isLoading ? (
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
            <ComicsList comics={comics}/>
          </div>
        </div>
      ) : null}
    </section>
  )
}
