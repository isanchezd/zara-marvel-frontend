'use client'

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/components/search-bar/search-bar.module.css';


library.add(faMagnifyingGlass)

interface SearchBarProps {
  results: number
  search: string
  setSearch: (search: string) => void
}


export default function SearchBar({results, search, setSearch}: SearchBarProps) {
    const PLACEHOLDER = 'SEARCH A CHARACTER...'

    const onInput = (event: React.FormEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value;
      setSearch(newValue)
    }

    return (
      <section>
        <div>
          <div className='row gap'>
            <label htmlFor='search'>
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            </label>
            <input
              id='search'
              name='search'
              className={`${styles.input}`}
              type='text'
              placeholder={PLACEHOLDER}
              value={search}
              onInput={onInput}
            />
          </div>

          <hr className={styles.bar} />
        </div>
        <div>
          <h2 className='text-dark'>{results} Results</h2>
        </div>
      </section>
    )
}