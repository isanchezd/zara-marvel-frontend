import Hero from "./Hero";

export default interface FavoritesRepository {
    setFavorites(favorites: Hero[]): void
    getFavorites(): Hero[]
}