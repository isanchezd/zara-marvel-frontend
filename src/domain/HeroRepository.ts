import Hero from '@/domain/Hero';

export default interface HeroRepository {
    // getHero(name?: string): Promise<Hero>
    getHeroes(): Promise<Hero[]>
}