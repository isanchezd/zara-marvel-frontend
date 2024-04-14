import Thumbnail from './Thumbnail';

export default interface Comic {
    id: number,
    title: string,
    thumbnail: Thumbnail,
    modified: string
}