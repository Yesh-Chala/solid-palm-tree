import { memo } from 'react'
import Link from 'next/link'

import styles from './header.module.css'
import { Logo as LogoIcon } from '@components/icons'
import Command from '@components/command'

const Header = ({ title, content, description }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href="/">
          <a aria-label="Navigate Home" className={styles.logo}>
            <LogoIcon />
          </a>
        </Link>

        <Command />

        {title &&
          <div className={styles.content}> <span className = {styles.header_title}>{title}</span> - {description}</div>}
      </div>
    </nav>
  )
}

Header.displayName = 'Header'
export default memo(Header)
