import Hero from '@/domain/Hero';

export default interface FavoriteHero extends Hero {
    isFavorite: boolean
}