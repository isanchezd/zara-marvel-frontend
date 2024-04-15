import FavoritesRepository from '@/domain/FavoritesRepository';
import Hero from '@/domain/Hero';

const SESSION_KEY = 'zaraMarvel';


function setFavorites(favorites: Hero[]): void {
    localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
            favoriteHeroes: [...favorites],
        })
    )
}

function getFavorites(): Hero[] {
    const sessionData = localStorage.getItem(SESSION_KEY)

    if (!sessionData) {
        return []
    }

    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData.favoriteHeroes;
}

const favoritesRepository: FavoritesRepository = { setFavorites, getFavorites }

export default favoritesRepository