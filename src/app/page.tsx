import React from 'react';
import SearchBar from '@/app/components/search-bar';
import HeroList from './components/hero-list';

export default function Home() {
  return (
    <>
      <SearchBar />
      <HeroList />
    </>
  )
}
