import React from 'react';
import SearchBar from '@/app/components/search-bar';
import HeroList from '@/app/components/hero-list';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <section className={`${styles.heroesLayout}`}>
      <SearchBar />
      <HeroList />
    </section>
  )
}
