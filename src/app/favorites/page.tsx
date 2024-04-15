'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from '@/app/components/search-bar'
import HeroList from '@/app/components/hero-list'
import Hero from '@/domain/Hero'
import useLoading from '@/app/hooks/useLoading'
import useFavoriteHeroes from '@/app/hooks/useFavoriteHeroes'

export default function Home() {
  const { isLoading, setIsLoading } = useLoading()
  const [search, setSearch] = useState<string>('')
  const [heroes, setHeroes] = useState<Hero[]>([])
  const { favorites } = useFavoriteHeroes()

  useEffect(() => {
    setIsLoading(true)
    setHeroes(
        favorites.filter((favorite) => favorite.name.includes(search))
    )
    setIsLoading(false)
  }, [search])

  return (
    <section className={`col p gap`}>
        <h2>Favorites</h2>
      <SearchBar
        results={heroes.length}
        search={search}
        setSearch={setSearch}
      />
      {!isLoading ? <HeroList heroes={heroes} /> : null}
    </section>
  )
}
