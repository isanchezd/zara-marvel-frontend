import Hero from '@/domain/Hero';

export default interface HeroRepository {
    getHero(id: number): Promise<Hero>
    getHeroes(name?: string): Promise<Hero[]>
}