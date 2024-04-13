import React from 'react'
import styles from './hero-card.module.css'

export default function HeroCard() {
    return (
      <article className={`${styles.heroCard} ${styles.heroCardBg}`}>
        <header className={`${styles.heroCardHeader}`}></header>
        <section className={`${styles.heroCardDescription}`}>
          <span className={`${styles.heroCardDescriptionText}`}>Hero Name</span>
          <img src='/icon-heart-default.png' alt='add-favorite' />
        </section>
      </article>
    )
}