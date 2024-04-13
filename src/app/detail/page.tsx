import React from 'react'
import styles from './page.module.css'
import HeroBanner from './components/hero-banner'

export default function Detail() {
  return (
    <section>
      <div className={`${styles.heroLayout} ${styles.banner}`}>
        <HeroBanner />
      </div>
      <div>
        <h1>Comics</h1>
        <div>
          <article>Item</article>
        </div>
      </div>
    </section>
  )
}
