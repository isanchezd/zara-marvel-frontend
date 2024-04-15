import useFavoriteHeroes from "@/app/hooks/useFavoriteHeroes";
import useLoading from "@/app/hooks/useLoading";
import Hero from "@/domain/Hero";
import { useEffect, useState } from "react";

export default function useSearchFavoriteHeroes () {
    const { isLoading, setIsLoading } = useLoading();   
    const [search, setSearch] = useState<string>('');   
    const [heroes, setHeroes] = useState<Hero[]>([]);   
    const { favorites } = useFavoriteHeroes(); 

    useEffect(() => {
        setIsLoading(true); 
        const filteredHeroes = favorites.filter((favorite) =>
            favorite.name.toLowerCase().includes(search.toLowerCase())
        );
        setHeroes(filteredHeroes); 
        setIsLoading(false); 
    }, [search]);

    return { heroes, search, setSearch, isLoading };
};
