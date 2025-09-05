import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Modal from './Modal';

function ProductList() {
  const products = [
    // KOLYE ÜRÜNLERİ
    { 
      id: 1, 
      name: "925 Ayar Gümüş Tiffany Kolye", 
      price: 1900,
      priceDisplay: "1900.00 ₺", 
      image: "/images/products/kolye/925 Ayar Gümüş Tiffany Kolye 1900 TL.jpg",
      description: "925 ayar gümüş Tiffany tarzı kolye. 1 metre uzunluğunda, her tarza uyum sağlar.",
      category: "Kolye",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 2, 
      name: "925 Ayar Gümüş Kolye", 
      price: 1800,
      priceDisplay: "1800.00 ₺", 
      image: "/images/products/kolye/925 Ayar Gümüş Kolye 1800 TL.jpg",
      description: "925 ayar gümüş kolye, renkli taş detaylı zarif tasarım.",
      category: "Kolye",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 3, 
      name: "925 Ayar Gümüş Kolye Rose Rengi", 
      price: 550,
      priceDisplay: "550.00 ₺", 
      image: "/images/products/kolye/925 Ayar Gümüş Kolye Rose Rengi 550 TL.jpg",
      description: "925 ayar gümüş kolye, rose gold renkli taş detaylı tasarım.",
      category: "Kolye",
      material: "Gümüş",
      style: "Romantik"
    },
    { 
      id: 4, 
      name: "925 Ayar Gümüş Siyah Yonca Kolye", 
      price: 800,
      priceDisplay: "800.00 ₺", 
      image: "/images/products/kolye/925 Ayar Gümüş Siyah Yonca Kolye 800 TL.jpg",
      description: "925 ayar gümüş kolye, siyah yonca motifli şık tasarım.",
      category: "Kolye",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 5, 
      name: "925 Ayar Gümüş Yeşim Taşı İncili Kolye", 
      price: 1200,
      priceDisplay: "1200.00 ₺", 
      image: "/images/products/kolye/925 Ayar Gümüş Yeşim Taşı İncili Kolye 1200 TL.jpg",
      description: "925 ayar gümüş kolye, yeşim taşı ve inci detaylı doğal tasarım.",
      category: "Kolye",
      material: "Gümüş",
      style: "Feminen"
    },

    // KÜPE ÜRÜNLERİ
    { 
      id: 6, 
      name: "925 Ayar Gümüş İncili Küpe", 
      price: 1000,
      priceDisplay: "1000.00 ₺", 
      image: "/images/products/kupe/925 Ayar Gümüş İncili Küpe 1000 TL.jpg",
      description: "925 ayar gümüş küpe, inci detaylı zarif tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 7, 
      name: "925 Ayar Gümüş Pırlanta Küpe", 
      price: 1800,
      priceDisplay: "1800.00 ₺", 
      image: "/images/products/kupe/925 Ayar Gümüş Pırlanta Küpe 1800 TL.jpg",
      description: "925 ayar gümüş küpe, pırlanta detaylı gösterişli tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 8, 
      name: "925 Ayar Gümüş Pırlanta Küpe", 
      price: 2000,
      priceDisplay: "2000.00 ₺", 
      image: "/images/products/kupe/925 Ayar Gümüş Pırlanta Küpe 2000TL.jpg",
      description: "925 ayar gümüş küpe, pırlanta detaylı yuvarlak tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 9, 
      name: "925 Ayar Gümüş Yeşim Taşı Küpe", 
      price: 1000,
      priceDisplay: "1000.00 ₺", 
      image: "/images/products/kupe/925 Ayar Gümüş Yeşim Taşı Küpe 1000 TL.jpg",
      description: "925 ayar gümüş küpe, yeşim taşı detaylı doğal tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Feminen"
    },
    { 
      id: 10, 
      name: "925 Ayar Kırlangıç Küpe", 
      price: 1800,
      priceDisplay: "1800.00 ₺", 
      image: "/images/products/kupe/925 Ayar Kırlangıç Küpe 1800TL.jpg",
      description: "925 ayar gümüş küpe, kırlangıç figürlü zarif tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 11, 
      name: "925 Ayar Küpe", 
      price: 1200,
      priceDisplay: "1200.00 ₺", 
      image: "/images/products/kupe/925 Ayar Küpe 1200 TL.jpg",
      description: "925 ayar gümüş küpe, yonca motifli sade tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Minimalist"
    },

    // BİLEZİK ÜRÜNLERİ
    { 
      id: 12, 
      name: "925 Ayar Gümüş Erkek Bileklik", 
      price: 1500,
      priceDisplay: "1500.00 ₺", 
      image: "/images/products/bilezik/925 Ayar Gümüş Erkek Bileklik 1500 TL.jpg",
      description: "925 ayar gümüş erkek bilekliği, sade ve şık tasarım.",
      category: "Bilezik",
      material: "Gümüş",
      style: "Minimalist"
    },
    { 
      id: 13, 
      name: "925 Ayar Kelebekli Bileklik", 
      price: 2200,
      priceDisplay: "2200.00 ₺", 
      image: "/images/products/bilezik/925 Ayar Kelebekli Bileklik 2200 TL.jpg",
      description: "925 ayar gümüş bileklik, kelebek motifli zarif tasarım.",
      category: "Bilezik",
      material: "Gümüş",
      style: "Feminen"
    },

    // TAKIM SETLERİ
    { 
      id: 14, 
      name: "925 Ayar Gümüş Pırlanta Kolye Küpe Yüzük", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Pırlanta Kolye Küpe Yüzük 2500 TL.jpg",
      description: "925 ayar gümüş pırlanta kolye, küpe ve yüzük takım seti. Zarif ve gösterişli tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 15, 
      name: "925 Ayar Gümüş Kolye ve Küpe", 
      price: 1200,
      priceDisplay: "1200.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Kolye ve Küpe 1200 TL.jpg",
      description: "925 ayar gümüş kolye ve küpe takım seti, yıldız motifli tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 16, 
      name: "925 Ayar Gümüş Kolye ve Küpe", 
      price: 1800,
      priceDisplay: "1800.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Kolye ve Küpe 1800 TL.jpg",
      description: "925 ayar gümüş kolye ve küpe takım seti, kare formunda taşlı tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Modern"
    },
    { 
      id: 17, 
      name: "925 Ayar Gümüş Küpe ve Kolye", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Küpe ve Kolye 2500 TL.jpg",
      description: "925 ayar gümüş küpe ve kolye takım seti, damla formunda pırıltılı tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 18, 
      name: "925 Ayar Gümüş Margazit Takım Modeli", 
      price: 2600,
      priceDisplay: "2600.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Margazit Takım Modeli 2600 TL.jpg",
      description: "925 ayar gümüş markazit takım modeli, yüzük, küpe ve kolye seti.",
      category: "Takım",
      material: "Gümüş",
      style: "Vintage"
    },
    { 
      id: 19, 
      name: "925 Ayar Gümüş Pırlanta Takımı", 
      price: 2300,
      priceDisplay: "2300.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Pırlanta Takımı 2300 TL.jpg",
      description: "925 ayar gümüş pırlanta takımı, kare formunda kolye, küpe ve yüzük seti.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 20, 
      name: "925 Ayar Gümüş Safir Pırlanta Modeli", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "/images/products/takim/925 Ayar Gümüş Safir Pırlanta Modeli 2500 tl.jpg",
      description: "925 ayar gümüş safir pırlanta modeli, kare formunda kolye, küpe ve yüzük seti.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 21, 
      name: "925 Ayar Pırlanta Set", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "/images/products/takim/925 Ayar Pırlanta Set 2500 TL.jpg",
      description: "925 ayar pırlanta set, kare formunda kolye, küpe ve yüzük takımı.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 22, 
      name: "925 Ayar İnci Kolye Ucu ve Küpe", 
      price: 1600,
      priceDisplay: "1600.00 ₺", 
      image: "/images/products/kupe/925 Ayar İnci Kolye Ucu ve Küpe 1600 TL.jpg",
      description: "925 ayar inci kolye ucu ve küpe takım seti, zarif ve sofistike tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 23, 
      name: "925 Ayar Yıldız Küpe ve Kolye Ucu", 
      price: 1800,
      priceDisplay: "1800.00 ₺", 
      image: "/images/products/kupe/925 Ayar Yıldız Küpe ve Kolye Ucu 1800 TL.jpg",
      description: "925 ayar yıldız küpe ve kolye ucu takım seti, romantik ve şık tasarım.",
      category: "Takım",
      material: "Gümüş",
      style: "Romantik"
    }
  ];

  // Filtreleme state'leri
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedMaterial, setSelectedMaterial] = useState('Tümü');
  const [selectedStyle, setSelectedStyle] = useState('Tümü');
  const [priceRange, setPriceRange] = useState('Tümü');
  const [sortBy, setSortBy] = useState('En Yeni');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isRestoringScroll, setIsRestoringScroll] = useState(false);

  // Filtreleme fonksiyonu
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'Tümü' || product.category === selectedCategory;
    const materialMatch = selectedMaterial === 'Tümü' || product.material === selectedMaterial;
    const styleMatch = selectedStyle === 'Tümü' || product.style === selectedStyle;
    
    let priceMatch = true;
    if (priceRange === '0-1000') priceMatch = product.price <= 1000;
    else if (priceRange === '1000-2000') priceMatch = product.price > 1000 && product.price <= 2000;
    else if (priceRange === '2000-3000') priceMatch = product.price > 2000 && product.price <= 3000;
    else if (priceRange === '3000+') priceMatch = product.price > 3000;

    return categoryMatch && materialMatch && styleMatch && priceMatch;
  });

  // Sıralama fonksiyonu
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Fiyat (Düşük-Yüksek)':
        return a.price - b.price;
      case 'Fiyat (Yüksek-Düşük)':
        return b.price - a.price;
      case 'En Yeni':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Sayfalama
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Görünecek sayfa numaralarını hesapla
  const getVisiblePages = () => {
    const delta = 2; // Her iki taraftan kaç sayfa gösterilecek
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  // Filtre değiştiğinde sayfa 1'e dön
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedMaterial, selectedStyle, priceRange, sortBy]);

  // Restore scroll position after page content changes
  useEffect(() => {
    if (isRestoringScroll && scrollPosition > 0) {
      // Wait for content to be fully rendered
      const timer = setTimeout(() => {
        window.scrollTo(0, scrollPosition);
        setIsRestoringScroll(false);
        setScrollPosition(0);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [currentPage, isRestoringScroll, scrollPosition]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
      // Capture current scroll position
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Set scroll position and restoration flag
      setScrollPosition(currentScrollTop);
      setIsRestoringScroll(true);
      
      // Change the page
      setCurrentPage(pageNumber);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const clearFilters = () => {
    setSelectedCategory('Tümü');
    setSelectedMaterial('Tümü');
    setSelectedStyle('Tümü');
    setPriceRange('Tümü');
    setSortBy('En Yeni');
  };

  return (
    <div className="product-list-wrapper">
      {/* Filtreleme Paneli */}
      <div className="filter-panel">
        <div className="filter-header">
          <h3>Ürün Filtreleme</h3>
          <button onClick={clearFilters} className="clear-filters">Filtreleri Temizle</button>
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label>Kategori:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="Tümü">Tümü</option>
              <option value="Kolye">Kolye</option>
              <option value="Küpe">Küpe</option>
              <option value="Bilezik">Bilezik</option>
              <option value="Takım">Takım</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Malzeme:</label>
            <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
              <option value="Tümü">Tümü</option>
              <option value="Gümüş">Gümüş</option>
              <option value="Rose Gold">Rose Gold</option>
              <option value="Altın">Altın</option>
              <option value="Çelik">Çelik</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Stil:</label>
            <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
              <option value="Tümü">Tümü</option>
              <option value="Modern">Modern</option>
              <option value="Vintage">Vintage</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Zarif">Zarif</option>
              <option value="Feminen">Feminen</option>
              <option value="Romantik">Romantik</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Fiyat Aralığı:</label>
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="Tümü">Tümü</option>
              <option value="0-1000">0 - 1000 TL</option>
              <option value="1000-2000">1000 - 2000 TL</option>
              <option value="2000-3000">2000 - 3000 TL</option>
              <option value="3000+">3000+ TL</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sırala:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="En Yeni">En Yeni</option>
              <option value="Fiyat (Düşük-Yüksek)">Fiyat (Düşük-Yüksek)</option>
              <option value="Fiyat (Yüksek-Düşük)">Fiyat (Yüksek-Düşük)</option>
            </select>
          </div>
        </div>

        <div className="filter-results">
          <p>{sortedProducts.length} ürün bulundu</p>
        </div>
      </div>

      {/* Ürün Listesi */}
      <div className={`product-list`}>
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">{product.priceDisplay}</p>
            <div className="product-tags">
              <span className="tag category">{product.category}</span>
              <span className="tag material">{product.material}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sonuç Yoksa */}
      {sortedProducts.length === 0 && (
        <div className="no-results">
          <p>Arama kriterlerinize uygun ürün bulunamadı.</p>
          <button onClick={clearFilters} className="clear-filters">Filtreleri Temizle</button>
        </div>
      )}

      {/* Modal Bileşeni */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPreviousPage();
            }}
            className="pagination-arrow" 
            disabled={currentPage === 1}
            aria-label="Önceki sayfa"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div className="page-numbers">
            {getVisiblePages().map((page, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (typeof page === 'number') {
                    goToPage(page);
                  }
                }}
                className={`page-number ${page === currentPage ? 'active' : ''} ${typeof page !== 'number' ? 'dots' : ''}`}
                disabled={typeof page !== 'number'}
                type="button"
              >
                {page}
              </button>
            ))}
          </div>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNextPage();
            }}
            className="pagination-arrow" 
            disabled={currentPage === totalPages}
            aria-label="Sonraki sayfa"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;