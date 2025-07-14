import React, { useState } from 'react'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="react-navigation" style={styles.nav}>
      <div className="nav-container" style={styles.navContainer}>
        <div className="nav-brand" style={styles.navBrand}>
          <h2>BizWatch AMS</h2>
        </div>
        
        <div className="nav-menu" style={styles.navMenu}>
          <button 
            className="nav-toggle" 
            onClick={toggleMenu}
            style={styles.navToggle}
          >
            <span>☰</span>
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={styles.navLinks}>
            <li><a href="#" style={styles.navLink}>대시보드</a></li>
            <li><a href="#" style={styles.navLink}>뉴스 관리</a></li>
            <li><a href="#" style={styles.navLink}>사용자 관리</a></li>
            <li><a href="#" style={styles.navLink}>설정</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem'
  },
  navBrand: {
    color: 'white'
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center'
  },
  navToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    margin: '0 0.25rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  }
}

export default NavigationBar 