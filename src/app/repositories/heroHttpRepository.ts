import { md5 } from 'js-md5';
import Hero from '@/domain/Hero';
import HeroRepository from '@/domain/HeroRepository';

interface HeroesResponse {
    code: number,
    status: string,
    data: {
        limit: number,
        total: number,
        count: number,
        results: Hero[]
    }
};

const LIMIT_RESULTS = 50;

async function getHeroes(name?: string): Promise<Hero[]> {
    const timestamp = (Date.now() / 1000 | 0)
    const publicKey = process.env.NEXT_PUBLIC_API_PUBLIC_KEY
    const privateKey = process.env.NEXT_PUBLIC_API_PRIVATE_KEY
    const hash = md5(`${timestamp}${privateKey}${publicKey}`)
    const nameQueryParam = name ? `&name=${name}` : '';
    const queryString = `ts=${timestamp}&apikey=${publicKey}&limit=${LIMIT_RESULTS}&hash=${hash}${nameQueryParam}`
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_PUBLIC_PATH}/characters?${queryString}`

    console.log(endpoint)

    const response = await fetch(endpoint)
    const dataResponse: HeroesResponse = await response.json()

    if (dataResponse.code !== 200 || dataResponse.status !== 'Ok') {
        throw new Error('Error getting Http Response')
    }

    return dataResponse.data.results;
}


const heroRepository: HeroRepository = { getHeroes }

export default heroRepository