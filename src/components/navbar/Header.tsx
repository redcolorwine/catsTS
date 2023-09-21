import React from 'react'
import cmedia from './header.module.css';

const Header: React.FC = () => {
  return (
    <div className={cmedia.header}>
      <nav>
        <li><a href="/">Home</a></li>
        <li><a href="/breeds">Breeds</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/random">RandomCat</a></li>
      </nav>
    </div>
  )
}

export default Header