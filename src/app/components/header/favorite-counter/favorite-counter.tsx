'use client';

import React from "react";
import useFavoriteHeroes from "@/app/hooks/useFavoriteHeroes";

export default function FavoriteCounter() {
    const { favorites } = useFavoriteHeroes()

    return (
      <div className='row align-center gap'>
          <i>
            <svg
              width='24'
              height='24'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className="svg-primary"
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
              />
            </svg>
          </i>
        <span>{favorites.length}</span>
      </div>
    )
}