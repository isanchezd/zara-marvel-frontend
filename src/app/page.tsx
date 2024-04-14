import React from 'react';
import SearchBar from '@/app/components/search-bar';
import HeroList from '@/app/components/hero-list';
import styles from '@/app/page.module.css';
import heroRepository from '@/app/repositories/heroHttpRepository';
import getHeroes from '@/useCases/getHeroes';



export default async function Home() {
  const heroes = await getHeroes(heroRepository)

  return (
    <section className={`${styles.heroesLayout}`}>
      <SearchBar results={heroes.length}/>
      <HeroList heroes={heroes}/>
    </section>
  )
}
