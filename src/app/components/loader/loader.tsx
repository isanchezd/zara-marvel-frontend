'use client'

import React from 'react'
import styles from './loader.module.css'
import useLoading from '@/app/hooks/useLoading'

export default function Loader() {
    const { isLoading } = useLoading()

    return (
        <>
        { isLoading ?  <hr className={`${styles.loader}`}/> : null}
        </>
    )
}