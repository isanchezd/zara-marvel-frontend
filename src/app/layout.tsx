import React from 'react';
import type { Metadata } from 'next';
import Header from '@/app/components/header';
import Loader from '@/app/components/loader';
import IsLoadingProvider from '@/app/providers/loadingProvider';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/app/styles/globals.css';
import dynamic from 'next/dynamic';


const FavoriteHeroProvider = dynamic(
  () => import('../app/providers/favoriteHeroesProvider'),
  {
    ssr: false,
  }
)

export const metadata: Metadata = {
  title: 'Marvel Heroes',
  description: 'Marvel heroes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
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
