'use client'

import React from 'react'
import SearchBar from '@/app/components/search-bar'
import HeroList from '@/app/components/hero-list'
import useSearchFavoriteHeroes from './hooks/useSearchFavorites'

export default function Home() {
  const { heroes, search, setSearch, isLoading } = useSearchFavoriteHeroes()

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
