import Hero from '@/domain/Hero';
import HeroRepository from '@/domain/HeroRepository';


export default function getHero(repository: HeroRepository, id: number): Promise<Hero> {
    return repository.getHero(id)
}