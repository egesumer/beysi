import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Modal from './Modal';

function ProductList() {
  const products = [
    { 
      id: 1, 
      name: "Zarif Gümüş Kolye", 
      price: 1000,
      priceDisplay: "1000.00 ₺", 
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "El işçiliği ile üretilen zarif gümüş kolye, her tarza uyum sağlar.",
      category: "Kolye",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 2, 
      name: "Minimalist Gümüş Bilezik", 
      price: 1500,
      priceDisplay: "1500.00 ₺", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Sade ve şık tasarım, günlük kullanım için ideal.",
      category: "Bilezik",
      material: "Gümüş",
      style: "Minimalist"
    },
    { 
      id: 3, 
      name: "Çiçek Motifli Küpe", 
      price: 2000,
      priceDisplay: "2000.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Doğal çiçek motifleri ile bezeli, feminen tasarım.",
      category: "Küpe",
      material: "Gümüş",
      style: "Feminen"
    },
    { 
      id: 4, 
      name: "Vintage Gümüş Kolye", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Klasik vintage tasarım, özel günler için mükemmel.",
      category: "Kolye",
      material: "Gümüş",
      style: "Vintage"
    },
    { 
      id: 5, 
      name: "Zincir Bilezik Seti", 
      price: 3000,
      priceDisplay: "3000.00 ₺", 
      image: "https://images.unsplash.com/photo-1603561411-07134e71a2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Üçlü bilezik seti, katmanlı takı trendine uygun.",
      category: "Bilezik",
      material: "Çelik",
      style: "Modern"
    },
    { 
      id: 6, 
      name: "İnci Detaylı Küpe", 
      price: 3500,
      priceDisplay: "3500.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Gümüş ve inci kombinasyonu, zarif ve sofistike.",
      category: "Küpe",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 7, 
      name: "Geometrik Kolye", 
      price: 4000,
      priceDisplay: "4000.00 ₺", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern geometrik tasarım, çağdaş tarzlar için.",
      category: "Kolye",
      material: "Altın",
      style: "Modern"
    },
    { 
      id: 8, 
      name: "Halka Küpe Seti", 
      price: 4500,
      priceDisplay: "4500.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Farklı boyutlarda halka küpeler, günlük kullanım için ideal.",
      category: "Küpe",
      material: "Altın",
      style: "Modern"
    },
    { 
      id: 9, 
      name: "Yıldız Motifli Kolye", 
      price: 5000,
      priceDisplay: "5000.00 ₺", 
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Romantik yıldız motifi, özel anlar için tasarlandı.",
      category: "Kolye",
      material: "Gümüş",
      style: "Romantik"
    },
    { 
      id: 10, 
      name: "Minimalist Bilezik", 
      price: 1000,
      priceDisplay: "1000.00 ₺", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Sade tasarım, her tarza uyum sağlar.",
      category: "Bilezik",
      material: "Çelik",
      style: "Minimalist"
    },
    { 
      id: 11, 
      name: "Çiçek Kolye", 
      price: 1500,
      priceDisplay: "1500.00 ₺", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "El işçiliği çiçek detayları, doğal güzellik.",
      category: "Kolye",
      material: "Gümüş",
      style: "Feminen"
    },
    { 
      id: 12, 
      name: "Zincir Küpe", 
      price: 2000,
      priceDisplay: "2000.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Zincir detaylı küpe, modern ve şık.",
      category: "Küpe",
      material: "Çelik",
      style: "Modern"
    },
    { 
      id: 13, 
      name: "Vintage Bilezik", 
      price: 2500,
      priceDisplay: "2500.00 ₺", 
      image: "https://images.unsplash.com/photo-1603561411-07134e71a2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Klasik vintage tasarım, zamansız güzellik.",
      category: "Bilezik",
      material: "Gümüş",
      style: "Vintage"
    },
    { 
      id: 14, 
      name: "Geometrik Küpe", 
      price: 3000,
      priceDisplay: "3000.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern geometrik tasarım, çağdaş tarzlar.",
      category: "Küpe",
      material: "Altın",
      style: "Modern"
    },
    { 
      id: 15, 
      name: "İnci Kolye", 
      price: 3500,
      priceDisplay: "3500.00 ₺", 
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Gümüş ve inci kombinasyonu, zarif ve lüks.",
      category: "Kolye",
      material: "Gümüş",
      style: "Zarif"
    },
    { 
      id: 16, 
      name: "Halka Bilezik", 
      price: 4000,
      priceDisplay: "4000.00 ₺", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Minimalist halka tasarım, günlük kullanım için.",
      category: "Bilezik",
      material: "Altın",
      style: "Minimalist"
    },
    { 
      id: 17, 
      name: "Yıldız Küpe", 
      price: 4500,
      priceDisplay: "4500.00 ₺", 
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Romantik yıldız motifi, özel günler için.",
      category: "Küpe",
      material: "Gümüş",
      style: "Romantik"
    },
    { 
      id: 18, 
      name: "Çiçek Bilezik", 
      price: 5000,
      priceDisplay: "5000.00 ₺", 
      image: "https://images.unsplash.com/photo-1603561411-07134e71a2b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "El işçiliği çiçek detayları, feminen tasarım.",
      category: "Bilezik",
      material: "Gümüş",
      style: "Feminen"
    },
    { 
      id: 19, 
      name: "Zincir Kolye", 
      price: 1000,
      priceDisplay: "1000.00 ₺", 
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Zincir detaylı kolye, modern ve şık.",
      category: "Kolye",
      material: "Çelik",
      style: "Modern"
    },
    { 
      id: 20, 
      name: "Geometrik Bilezik", 
      price: 1500,
      priceDisplay: "1500.00 ₺", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern geometrik tasarım, çağdaş tarzlar için.",
      category: "Bilezik",
      material: "Altın",
      style: "Modern"
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

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
      // Capture current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Change the page
      setCurrentPage(pageNumber);
      
      // Multiple attempts to restore scroll position
      const restoreScroll = () => {
        window.scrollTo(0, currentScrollPosition);
      };
      
      // Immediate restoration
      restoreScroll();
      
      // Multiple delayed attempts to ensure restoration
      requestAnimationFrame(restoreScroll);
      setTimeout(restoreScroll, 10);
      setTimeout(restoreScroll, 50);
      setTimeout(restoreScroll, 100);
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
            </select>
          </div>

          <div className="filter-group">
            <label>Malzeme:</label>
            <select value={selectedMaterial} onChange={(e) => setSelectedMaterial(e.target.value)}>
              <option value="Tümü">Tümü</option>
              <option value="Gümüş">Gümüş</option>
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