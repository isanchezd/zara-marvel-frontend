import HeroRepository from '@/domain/HeroRepository';

export default function(repository: HeroRepository, name?: string) {
    return repository.getHeroes(name);
}