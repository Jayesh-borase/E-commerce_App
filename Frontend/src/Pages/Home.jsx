import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Example cart count

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Handle search logic here
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">ShopHub</span>
          </div>

          {/* Search Box */}
          <div className="nav-search">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button">
                <span className="search-icon">🔍</span>
                Search
              </button>
            </form>
          </div>

          {/* Right Side Items */}
          <div className="nav-right">
            {/* Login/User Button */}
            {isLoggedIn ? (
              <div className="nav-user">
                <button className="nav-button user-button">
                  <span className="button-icon">👤</span>
                  <span className="button-text">John Doe</span>
                </button>
                <div className="user-dropdown">
                  <button className="dropdown-item">My Profile</button>
                  <button className="dropdown-item">My Orders</button>
                  <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <button className="nav-button login-button" onClick={handleLogin}>
                <span className="button-icon">👤</span>
                <span className="button-text">Login</span>
              </button>
            )}

            {/* Cart Button */}
            <button className="nav-button cart-button">
              <span className="button-icon">🛒</span>
              <span className="button-text">Cart</span>
              {cartItems > 0 && (
                <span className="cart-badge">{cartItems}</span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ShopHub</h1>
            <p className="hero-subtitle">Discover amazing products at great prices</p>
            <button className="cta-button">Start Shopping</button>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="featured-section">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {/* Product cards would go here */}
            <div className="product-card">
              <div className="product-image">📱</div>
              <h3>Smartphone</h3>
              <p>$299.99</p>
            </div>
            <div className="product-card">
              <div className="product-image">💻</div>
              <h3>Laptop</h3>
              <p>$899.99</p>
            </div>
            <div className="product-card">
              <div className="product-image">🎧</div>
              <h3>Headphones</h3>
              <p>$149.99</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>ShopHub</h3>
            <p>Your one-stop destination for all your shopping needs. Quality products, great prices, and excellent service.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;