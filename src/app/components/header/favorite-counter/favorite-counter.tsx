'use client';

import React from "react";
import styles from './favorite-counter.module.css';
import useFavoriteHeroes from "@/app/hooks/useFavoriteHeroes";

export default function FavoriteCounter() {
    const { favorites } = useFavoriteHeroes()

    return (
      <div className={`${styles.counter}`}>
        <img src='/icon-heart-default.png' alt='favorites' />
        <span className={`${styles.counterText}`}>{favorites.length}</span>
      </div>
    )
}