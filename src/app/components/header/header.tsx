import React from 'react';
import FavoriteCounter from './favorite-counter/favorite-counter';

export default function Header() {
    return (
      <header
        className={`row align-center space-between p bg-dark`}
      >
        <div>
          <img src='/logo.png' alt='marvel logo' />
        </div>
        <FavoriteCounter />
      </header>
    )
}