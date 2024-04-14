import { md5 } from 'js-md5';
import ComicRepository from '@/domain/ComicRepository';
import Comic from '@/domain/Comic';

interface HeroesResponse {
    code: number,
    status: string,
    data: {
        limit: number,
        total: number,
        count: number,
        results: Comic[]
    }
};

const LIMIT_RESULTS = 20;

async function getComicsFromCharacter(id: number): Promise<Comic[]> {
    const timestamp = (Date.now() / 1000 | 0);
    const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY;
    const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY;
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);
    const queryString = `ts=${timestamp}&apikey=${publicKey}&limit=${LIMIT_RESULTS}&hash=${hash}`;
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_PUBLIC_PATH}/characters/${id}/comics?${queryString}`;

    const response = await fetch(endpoint)
    const dataResponse: HeroesResponse = await response.json()

    if (dataResponse.code !== 200 || dataResponse.status !== 'Ok') {
        throw new Error('Error getting Http Response')
    }

    return dataResponse.data.results;
}


const comicRepository: ComicRepository = { getComicsFromCharacter };

export default comicRepository;