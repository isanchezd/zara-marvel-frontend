import ComicRepository from '@/domain/ComicRepository';
import Hero from '@/domain/Hero';
import HeroRepository from '@/domain/HeroRepository';
import Comic from '@/domain/Comic';

type outputGetHero = { hero: Hero, comics: Comic[] };



export default async function getHero(id: number, heroRepository: HeroRepository, comicRepository: ComicRepository): Promise<outputGetHero> {
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