import { Comic } from "./Comic";

export default interface ComicRepository{
    getComicsFromCharacter(id: number): Promise<Comic[]>
}