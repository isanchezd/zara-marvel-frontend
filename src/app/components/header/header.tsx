import React from 'react';
import FavoriteCounter from './favorite-counter/favorite-counter';
import Link from 'next/link';

export default function Header() {
    return (
      <header className={`row align-center space-between p bg-dark`}>
        <div>
          <Link href={'/'}>
            <img src='/logo.png' alt='marvel logo' />
          </Link>
        </div>
        <FavoriteCounter />
      </header>
    )
}