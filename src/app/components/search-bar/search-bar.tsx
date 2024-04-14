import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from '@/app/components/search-bar/search-bar.module.css';
const PLACEHOLDER = 'SEARCH A CHARACTER...';

library.add(faMagnifyingGlass)


export default function SearchBar() {
    return (
      <section className={`${styles.searchBarWrapper}`}>
        <div>
          <div className={`${styles.searchBar}`}>
            <label htmlFor='search'>
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
            </label>
            <input
              id='search'
              name='search'
              className={`${styles.searchInput}`}
              type='text'
              placeholder={PLACEHOLDER}
            />
          </div>

          <hr className={styles.searchBarBottom} />
        </div>
        <div>
          <h2 className={`${styles.counterTitle}`}>0 Results</h2>
        </div>
      </section>
    )
}