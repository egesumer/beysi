import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
    const slides = [
        {
          id: 1,
          image: "/images/slideshow/slide1.png",
          text: "Safir Pırlanta Koleksiyonu",
          subtitle: "Mavi taşların büyüleyici ışıltısı"
        },
        {
          id: 2,
          image: "/images/slideshow/slide2.png",
          text: "Turkuaz Markazit Takımı",
          subtitle: "Doğal taşların zarif uyumu"
        },
        {
          id: 3,
          image: "/images/slideshow/slide3.png",
          text: "Markazit Çiçek Takımı",
          subtitle: "Zarif çiçek deseninin büyüsü"
        }
      ];
      

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    // Loading ekranını 2.5 saniye sonra kaldır
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
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

  const openSlideModal = (slideIndex) => {
    setCurrentSlideIndex(slideIndex);
    setIsSlideModalOpen(true);
  };

  const closeSlideModal = () => {
    setIsSlideModalOpen(false);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Smooth transition for loop
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 50);
    
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Smooth transition for loop
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, 50);
    
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="loading-logo">
            <img src="/images/logo.png" alt="Beysi Silver Jewelry" className="spinning-logo" />
          </div>
          <div className="loading-text">
            <h2>Beysi Jewelry</h2>
            <p>Zarafetin Işıltısı</p>
          </div>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="left-decoration"></div>
      <div className="right-decoration"></div>
      
      <header>
        <div className="logo-container">
          <img src="/images/logo.png" alt="Beysi Silver Jewelry" className="brand-logo" />
        </div>
        <h1>Beysi Jewelry</h1>
        <p>Zarafetin Işıltısı</p>
      </header>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isFilterOpen ? 'hidden' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Anasayfa</a>
        <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Ürünler</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Hakkımızda</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>İletişim</a>
      </nav>

      <div id="home" className="slideshow">
        <div className="slide-container" onClick={() => openSlideModal(currentSlide)}>
          <img 
            src={slides[currentSlide].image} 
            alt={`Slide ${slides[currentSlide].id}`} 
            className={`slide ${isFading ? 'fade-out' : 'fade-in'} clickable`} 
          />
          <div className="slide-content">
            <h2 className="slide-title">{slides[currentSlide].text}</h2>
            <p className="slide-subtitle">{slides[currentSlide].subtitle}</p>
          </div>
          <div className="slide-overlay">
            <p>Detayları görmek için tıklayın</p>
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
        <ProductList onFilterToggle={setIsFilterOpen} />
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
      
      {/* Floating Sipariş Butonu */}
      <div className="floating-order-button" onClick={() => setShowOrderModal(true)}>
        <span className="order-text">Sipariş Ver</span>
      </div>

      {/* Slideshow Modal */}
      {isSlideModalOpen && (
        <div className="slide-modal-overlay" onClick={closeSlideModal}>
          <div className="slide-modal-content" onClick={e => e.stopPropagation()}>
            <button className="slide-modal-close" onClick={closeSlideModal}>×</button>
            
            <div className="slide-modal-container">
              <button className="slide-nav-btn prev-btn" onClick={prevSlide}>
                <span>‹</span>
              </button>
              
              <div 
                className={`slide-modal-image-container ${isTransitioning ? 'transitioning' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={slides[currentSlideIndex].image} 
                  alt={`Slide ${slides[currentSlideIndex].id}`} 
                  className={`slide-modal-image ${isTransitioning ? 'fade-transition' : ''}`}
                />
                <div className={`slide-modal-info ${isTransitioning ? 'slide-up' : ''}`}>
                  <h3>{slides[currentSlideIndex].text}</h3>
                  <p>{slides[currentSlideIndex].subtitle}</p>
                </div>
              </div>
              
              <button className="slide-nav-btn next-btn" onClick={nextSlide}>
                <span>›</span>
              </button>
            </div>
            
            <div className="slide-modal-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slide-modal-indicator ${index === currentSlideIndex ? 'active' : ''}`}
                  onClick={() => setCurrentSlideIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sipariş Modal */}
      {showOrderModal && (
        <div className="order-modal-overlay" onClick={() => setShowOrderModal(false)}>
          <div className="order-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowOrderModal(false)}>×</button>
            <h2>Sipariş Bilgileri</h2>
            <p>Ürünlerimizi sipariş etmek için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz:</p>
            
                                <div className="contact-options">
                        <a href="https://www.instagram.com/beysitaki" target="_blank" rel="noopener noreferrer" className="contact-option instagram">
                            <span className="contact-icon">📷</span>
                            <div>
                                <h3>Instagram</h3>
                                <p>@beysitaki</p>
                            </div>
                        </a>
                    </div>
            
            <div className="order-instructions">
              <h3>Nasıl Sipariş Veririm?</h3>
              <ol>
                <li>Beğendiğiniz ürünü seçin</li>
                <li>Ürün fotoğrafını paylaşın</li>
                <li>Adres bilgilerinizi verin</li>
                <li>Ödeme yöntemini seçin</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      <footer id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Beysi Jewelry</h3>
            <p>Zarafetin Işıltısı</p>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <p><span className="contact-icon email-icon"></span>info@beysiaccessories.com</p>
            <p><span className="contact-icon location-icon"></span>İstanbul, Türkiye</p>
          </div>
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/beysitaki" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Beysi Jewelry. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
