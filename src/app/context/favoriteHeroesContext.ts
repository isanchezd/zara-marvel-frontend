import React, { createContext } from 'react';
import FavoriteHero from '@/app/models/FavoriteHero';

interface FavoriteHeroesContext {
    favorites: FavoriteHero[]
    setFavorites: (favoriteHeroes: FavoriteHero[]) => void
};

const FavoriteHeroesContext = createContext<FavoriteHeroesContext | undefined>(undefined);

export default FavoriteHeroesContext;