import heroFactory from "@/app/factory/heroFactory";
import useLoading from "@/app/hooks/useLoading";
import comicRepository from "@/app/repositories/comicHttpRepository";
import heroRepository from "@/app/repositories/heroHttpRepository";
import Comic from "@/domain/Comic";
import ComicRepository from "@/domain/ComicRepository";
import Hero from "@/domain/Hero";
import HeroRepository from "@/domain/HeroRepository";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useGetHero () {
    const { isLoading, setIsLoading } = useLoading();
    const pathname = usePathname();
    const id = Number(pathname.split('/')[2]);
    const [hero, setHero] = useState<Hero>({} as Hero);
    const [comics, setComics] = useState<Comic[]>([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchHero = async () => {
            try {
                const data = await getHero(id, heroRepository, comicRepository);
                const { hero, comics} = data
                setHero(heroFactory(hero.id, hero.name, hero.description, hero.thumbnail, false));
                setComics([...comics]);
            } catch (error) {
                console.error('Failed to fetch hero data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchHero();
        }
    }, [id]);

    return { hero, comics, isLoading };
};


async function getHero(id: number, heroRepository: HeroRepository, comicRepository: ComicRepository): Promise<{hero: Hero, comics: Comic[]}> {
    const promises = [heroRepository.getHero(id), comicRepository.getComicsFromCharacter(id)]

    try {
        const [hero, comics] = await Promise.all(promises);

        return {
            hero: hero as Hero,
            comics: comics as Comic[]
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            hero: {} as Hero,
            comics: []
        };
    }
}
