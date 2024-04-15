import FavoriteHero from '@/app/models/FavoriteHero';

const SESSION_KEY = 'zaraMarvel';


function setFavorites(favorites: FavoriteHero[]): void {
    localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
            favoriteHeroes: [...favorites],
        })
    )
}

function getFavorites(): FavoriteHero[] {
    const sessionData = localStorage.getItem(SESSION_KEY)

    if (!sessionData) {
        return []
    }

    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData.favoriteHeroes;
}

const favoritesRepository = { setFavorites, getFavorites }

export default favoritesRepository