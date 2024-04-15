import Hero from "@/domain/Hero";
import heroFactory from "../factory/heroFactory";

export default function useHeroesFactory(heroes: Hero[], favorites: Hero[]) {
    return heroes.map(hero => {
        const isFavorite = isHeroInFavorites(favorites, hero);
        return heroFactory(hero.id, hero.name, hero.description, hero.thumbnail, isFavorite);
    });
}

function isHeroInFavorites(favorites: Hero[], hero: Hero) {
    return favorites.some((favorite) => {
        return favorite.id === hero.id
    })
}