'use client'

import React from 'react'
import SearchBar from '@/app/components/search-bar'
import HeroList from '@/app/components/hero-list'
import useSearchHeroes from './hooks/useSearchHeroes'

export default function Home() {
  const { heroes, search, setSearch, isLoading } = useSearchHeroes()

  return (
    <section className={`col p gap`}>
      <SearchBar
        results={heroes.length}
        search={search}
        setSearch={setSearch}
      />
      {!isLoading ? <HeroList heroes={[...heroes]} /> : null}
    </section>
  )
}
