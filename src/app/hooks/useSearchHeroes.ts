import { useState, useEffect } from 'react';
import heroRepository from '@/app/repositories/heroHttpRepository';
import useLoading from './useLoading';
import Hero from '@/domain/Hero';

export default function useSearchHeroes() {
    const { isLoading, setIsLoading } = useLoading();
    const [search, setSearch] = useState('');
    const [heroes, setHeroes] = useState<Hero[]>([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchHeroes = async () => {
            try {
                const data = await heroRepository.getHeroes(search)
                setHeroes(data);
            } catch (error) {
                console.error('Failed to fetch heroes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHeroes();
        
    }, [search]);

    return { heroes, search, setSearch, isLoading };
};



