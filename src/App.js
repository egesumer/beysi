import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
    const slides = [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1515562141207-7cf88c5d4b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
          text: "Yeni Sezon Aksesuarlar",
          subtitle: "Stilinizi tamamlayan özel parçalar"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
          text: "Zarif ve Zamansız Tasarımlar",
          subtitle: "Her anınızda şıklığınızı yansıtın"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
          text: "Işıltılı Koleksiyonlar",
          subtitle: "Özel günleriniz için özel tasarımlar"
        }
      ];
      

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        setIsFading(false);
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      <div className="left-decoration"></div>
      <div className="right-decoration"></div>
      
      <header>
        <h1>Beysi Accessories</h1>
        <p>Stilinizde Yeni Bir Işıltı</p>
      </header>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Anasayfa</a>
        <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Ürünler</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Hakkımızda</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>İletişim</a>
      </nav>

      <div id="home" className="slideshow">
        <div className="slide-container">
          <img 
            src={slides[currentSlide].image} 
            alt={`Slide ${slides[currentSlide].id}`} 
            className={`slide ${isFading ? 'fade-out' : 'fade-in'}`} 
          />
          <div className="slide-content">
            <h2 className="slide-title">{slides[currentSlide].text}</h2>
            <p className="slide-subtitle">{slides[currentSlide].subtitle}</p>
          </div>
        </div>
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsFading(false);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>
      
      <section id="products">
        <div className="section-header">
          <h2>Koleksiyonumuz</h2>
          <p>Her tarz için özel tasarımlar</p>
        </div>
        <ProductList />
      </section>
      
      <section id="about" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="section-header">
          <h2>Hakkımızda</h2>
          <p>Stilinizi tamamlayan özel aksesuarlar</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <p style={{ fontSize: '1.1rem', color: '#7a7068', marginBottom: '2rem' }}>
            Beysi Accessories olarak, her kadının kendini özel hissetmesini sağlayan zarif ve kaliteli aksesuarlar sunuyoruz. 
            Modern tasarımlarımızla günlük hayatınızın her anında şıklığınızı tamamlayacak parçalar bulacaksınız.
          </p>
        </div>
      </section>
      
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Beysi Accessories</h3>
            <p>Stilinizi tamamlayan özel aksesuarlar</p>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <p><span className="contact-icon email-icon"></span>info@beysiaccessories.com</p>
            <p><span className="contact-icon phone-icon"></span>+90 123 456 7890</p>
            <p><span className="contact-icon location-icon"></span>İstanbul, Türkiye</p>
          </div>
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Beysi Accessories. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
