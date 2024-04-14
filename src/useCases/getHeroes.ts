import HeroRepository from '@/domain/HeroRepository';

export default function(repository: HeroRepository) {
    return repository.getHeroes();
}