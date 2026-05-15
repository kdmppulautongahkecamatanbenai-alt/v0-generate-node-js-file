import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

const languages = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Indonesia' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">
            <img src="/images/tropicoco-logo.png" alt="Tropicoco Logo" />
            <span className="logo-text">TROPICOCO</span>
          </Link>

          <nav className="nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <select
              className="lang-selector"
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <select
          className="lang-selector"
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
          style={{ marginTop: '2rem', display: 'block' }}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Header;
