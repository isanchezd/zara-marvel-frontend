import React from 'react'
import styles from './hero-banner.module.css'

export default function HeroBanner() {
    return (
      <div className={`${styles.heroDetail}`}>
        <div className={`${styles.portrait}`}>
          <img src='/default-photo.png' alt='heroe photo' />
        </div>
        <div className={`${styles.detailWrapper}`}>
          <div className={`${styles.detail}`}>
            <h1 className={`${styles.title}`}>Heroe</h1>
            <img src='/icon-heart-default.png' alt='heroe photo' />
          </div>
          <div>
            <p className={`${styles.description}`}>
              Created by the Enclave to be part of a race of super humans who
              would abolish war, illness, and crime, Adam Warlock is a unique
              being who uses his immense and formidable powers to safeguard the
              universe.
            </p>
          </div>
        </div>
      </div>
    )
}