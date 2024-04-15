import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import useFavoriteHeroes from './useFavoriteHeroes';
import Hero from '@/domain/Hero';

const useAddFavoriteHero = (hero: Hero): [Hero, Dispatch<SetStateAction<Hero>>] => {
    const [heroState, setHeroState] = useState<Hero>(hero);
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