interface Thumbnail {
    path: string,
    extension: string
}

export default interface Hero {
    id: number,
    name: string,
    description: string,
    thumbnail: Thumbnail
}