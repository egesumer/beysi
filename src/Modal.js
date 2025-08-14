import React, { useState } from 'react';
import './Modal.css'; // CSS dosyanızı burada import edin

function Modal({ isOpen, onClose, product }) {
  const [zoomOpen, setZoomOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>×</button>
          <div className="modal-header">
            <h2 className="modal-title">{product.name}</h2>
            <div className="modal-price-badge">
              <span className="modal-price">{product.price}</span>
            </div>
          </div>
          <div className="modal-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
              onClick={e => { e.stopPropagation(); setZoomOpen(true); }}
              style={{ cursor: 'zoom-in' }}
            />
            <div className="modal-image-overlay">
              <div className="zoom-indicator">🔍 Büyütmek için tıklayın</div>
            </div>
          </div>
          <div className="modal-details">
            <div className="modal-description-section">
              <h3 className="section-title">Ürün Açıklaması</h3>
              <p className="modal-description">{product.description}</p>
            </div>
            <div className="modal-specifications modern-specs">
              <h3 className="section-title">Özellikler</h3>
              <div className="specs-grid modern">
                <div className="spec-item modern">
                  <span className="spec-label">Materyal</span>
                  <span className="spec-value">925 Ayar Gümüş</span>
                </div>
                <div className="spec-item modern">
                  <span className="spec-label">Üretim</span>
                  <span className="spec-value">El İşçiliği</span>
                </div>
                <div className="spec-item modern">
                  <span className="spec-label">Teslimat</span>
                  <span className="spec-value">1-3 İş Günü</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="action-button primary">Sepete Ekle</button>
              <button className="action-button secondary">Favorilere Ekle</button>
            </div>
          </div>
        </div>
      </div>
      {zoomOpen && (
        <div className="zoom-modal-overlay" onClick={() => setZoomOpen(false)}>
          <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
            <img src={product.image} alt={product.name} className="zoom-modal-image" />
            <button className="close-button zoom-close" onClick={() => setZoomOpen(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
