import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import useFavoriteHeroes from './useFavoriteHeroes';
import FavoriteHero from '../models/FavoriteHero';

const useAddFavoriteHero = (hero: FavoriteHero): [FavoriteHero, Dispatch<SetStateAction<FavoriteHero>>] => {
    const [heroState, setHeroState] = useState<FavoriteHero>(hero);
    const { favorites, setFavorites } = useFavoriteHeroes();

    useEffect(() => {
        let newFavorites = favorites.filter((favorite) => favorite.id !== hero.id);

        if (heroState.isFavorite) {
            newFavorites.push(heroState);
        }

        setFavorites(newFavorites);
    }, [heroState]);

    return [heroState, setHeroState];
};

export default useAddFavoriteHero;