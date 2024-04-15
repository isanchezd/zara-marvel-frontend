import Hero from "@/domain/Hero";
import Thumbnail from "@/domain/Thumbnail";

export default function heroFactory(id: number, name: string, description: string, thumbnail: Thumbnail, isFavorite: boolean = false): Hero {
    if(!id) {
        throw new Error('id is mandatory')
    }

    return {
        id,
        name,
        description,
        thumbnail,
        isFavorite
    }
}