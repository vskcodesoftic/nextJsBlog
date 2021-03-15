import Link from 'next/link'
import React from 'react'

import classes from './MainHeader.module.css'

const MainHeader = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
            <Link href="/">Blog</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><Link href="/events">Events</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
