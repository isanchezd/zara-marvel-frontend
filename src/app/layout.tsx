import React from 'react';
import type { Metadata } from 'next';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/styles/globals.css';
import Header from '@/app/components/header';
import Loader from '@/app/components/loader';
import styles from '@/app/layout.module.css';
import IsLoadingProvider from '@/app/providers/loadingProvider';
import FavoriteHeroProvider from '@/app/providers/favoriteHeroesProvider';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${styles.body}`}>
        <FavoriteHeroProvider>
          <Header />
          <IsLoadingProvider>
            <Loader />
            <main>{children}</main>
          </IsLoadingProvider>
        </FavoriteHeroProvider>
      </body>
    </html>
  )
}
