import Thumbnail from "./Thumbnail";

export default interface Hero {
    id: number,
    name: string,
    description: string,
    thumbnail: Thumbnail,
    isFavorite?: boolean
}