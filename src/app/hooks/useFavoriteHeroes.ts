import { useContext } from "react";
import FavoriteHeroesContext from "@/app/context/favoriteHeroesContext";

export default function useFavoriteHeroes() {
    const context = useContext(FavoriteHeroesContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a FavoriteHeroesContext');
    }
    return context;
}