import React from 'react';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={`${styles.header} ${styles.headerBg}`}>
            <div>
                <img src="/logo.png" alt="marvel logo" />
            </div>
            <div className={`${styles.favorites}`}>
                <img src="/icon-heart-default.png" alt="favorites" />
                <span className={`${styles.counterText}`}>0</span>
            </div>
        </header>
    )
}