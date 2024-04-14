import Comic from '@/domain/Comic';
import ComicRepository from '@/domain/ComicRepository';

export default function getComics(id: number, repository: ComicRepository): Promise<Comic[]> {
    return repository.getComicsFromCharacter(id);
}