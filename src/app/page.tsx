'use client'

import React, { useEffect, useState } from 'react';
import SearchBar from '@/app/components/search-bar';
import HeroList from '@/app/components/hero-list';
import heroRepository from '@/app/repositories/heroHttpRepository';
import getHeroes from '@/useCases/getHeroes';
import Hero from '@/domain/Hero';
import useLoading from './hooks/useLoading';



export default function Home() {
  const { isLoading, setIsLoading } = useLoading()
  const [search, setSearch] = useState<string>('')
  const [heroes, setHeroes] = useState<Hero[]>([])

  useEffect(() => {
    setIsLoading(true)
    const fetchHeroes = async () => {
      try {
        const data = await getHeroes(heroRepository, search)
        setHeroes(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHeroes()
  }, [search])


  return (
    <section className={`full-container col p gap`}>
      <SearchBar results={heroes.length} search={search} setSearch={setSearch} />
      {!isLoading ? <HeroList heroes={heroes}/> : null}
    </section>
  )
}
