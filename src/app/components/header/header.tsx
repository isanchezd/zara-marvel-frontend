import React from 'react';
import FavoriteCounter from './favorite-counter/favorite-counter';
import styles from './header.module.css';

export default function Header() {
    return (
      <header className={`${styles.header} ${styles.headerBg}`}>
        <div>
          <img src='/logo.png' alt='marvel logo' />
        </div>
        <FavoriteCounter />
      </header>
    )
}