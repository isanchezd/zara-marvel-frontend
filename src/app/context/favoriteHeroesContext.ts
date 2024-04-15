import React, { createContext } from 'react';
import Hero from '@/domain/Hero';

interface FavoriteHeroesContext {
    favorites: Hero[]
    setFavorites: (favoriteHeroes: Hero[]) => void
};

const FavoriteHeroesContext = createContext<FavoriteHeroesContext | undefined>(undefined);

export default FavoriteHeroesContext;