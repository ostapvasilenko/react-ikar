import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>Header

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
 
export default Header