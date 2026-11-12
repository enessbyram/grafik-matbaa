import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Plus, ShoppingCart, X, Send, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { serviceCategories, contactInfo, type Product } from '../data/siteData';

interface QuoteItem {
  product: Product;
  category: string;
  quantity: string;
  notes: string;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const activeService = serviceCategories.find((c) => c.id === activeCategory)!;

  const addToQuote = (product: Product) => {
    if (!quoteItems.find((item) => item.product.id === product.id)) {
      setQuoteItems([...quoteItems, { product, category: activeService.title, quantity: '100', notes: '' }]);
      setAddedProduct(product.id);
      setTimeout(() => setAddedProduct(null), 1500);
    }
  };

  const removeFromQuote = (productId: string) => {
    setQuoteItems(quoteItems.filter((item) => item.product.id !== productId));
  };

  const updateQuoteItem = (productId: string, field: 'quantity' | 'notes', value: string) => {
    setQuoteItems(quoteItems.map((item) =>
      item.product.id === productId ? { ...item, [field]: value } : item
    ));
  };

  const generateWhatsAppMessage = () => {
    let message = '🖨️ *ALB Tekstil Baskı Boya Teklif Talebi*\n\n';
    quoteItems.forEach((item, i) => {
      message += `${i + 1}. *${item.product.title}* (${item.category})\n`;
      message += `   Adet: ${item.quantity}\n`;
      if (item.notes) message += `   Not: ${item.notes}\n`;
      message += '\n';
    });
    message += 'Lütfen yukarıdaki ürünler için teklif gönderebilir misiniz?';
    return encodeURIComponent(message);
  };

  return (
    <>
      {/* Page Hero */}
      <section style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              background: 'rgba(6,182,212,0.1)',
              color: '#22d3ee',
              border: '1px solid rgba(6,182,212,0.2)',
              marginBottom: '1rem',
            }}>
              Hizmetler & Ürünler
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1rem',
            }}>
              Ürün & Hizmet <span className="gradient-text-accent">Kataloğumuz</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-on-dark-muted)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              İhtiyacınıza uygun ürünleri keşfedin ve teklif listenize ekleyin. Hızlıca fiyat teklifi alın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '2rem',
            alignItems: 'flex-start',
          }}
            className="services-grid"
          >
            {/* Sidebar - Category Filter */}
            <ScrollReveal direction="left">
              <div style={{
                position: 'sticky',
                top: '100px',
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: '1px solid var(--border)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                }}>
                  Kategoriler
                </div>
                {serviceCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 1.5rem',
                        border: 'none',
                        borderLeft: isActive ? `3px solid ${cat.color}` : '3px solid transparent',
                        background: isActive ? `${cat.color}08` : 'transparent',
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        fontWeight: isActive ? 600 : 400,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        textAlign: 'left',
                      }}
                    >
                      <Icon size={18} style={{ color: isActive ? cat.color : 'var(--text-muted)' }} />
                      {cat.title}
                      <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: isActive ? 1 : 0, color: cat.color }} />
                    </button>
                  );
                })}

                {/* Quote Badge */}
                {quoteItems.length > 0 && (
                  <div style={{
                    margin: '1rem',
                    padding: '1rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    cursor: 'pointer',
                  }}
                    onClick={() => setIsQuoteOpen(true)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>
                      <ShoppingCart size={16} />
                      Teklif Listem ({quoteItems.length})
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>
                      Tıklayarak listeyi görüntüle
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Product Grid */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <activeService.icon size={28} style={{ color: activeService.color }} />
                      <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{activeService.title}</h2>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      {activeService.description}
                    </p>
                  </div>

                  {/* Products */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1.25rem',
                  }}>
                    {activeService.products.map((product, index) => {
                      const isAdded = quoteItems.some((item) => item.product.id === product.id);
                      const justAdded = addedProduct === product.id;

                      return (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="card"
                          style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderColor: isAdded ? '#06b6d4' : undefined,
                          }}
                        >
                          {/* Color Accent */}
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: activeService.color,
                            opacity: 0.5,
                          }} />

                          {/* Product Image */}
                          <div style={{
                            height: '170px',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: '1rem',
                            background: `linear-gradient(135deg, ${activeService.color}15, var(--surface-card))`,
                          }}>
                            <img
                              src={product.image}
                              alt={product.title}
                              loading="lazy"
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s ease',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                            />
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(10,22,40,0.4) 0%, transparent 60%)',
                              pointerEvents: 'none',
                            }} />
                          </div>

                          <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {product.title}
                          </h3>
                          <p style={{
                            fontSize: '0.8125rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: '1.25rem',
                          }}>
                            {product.description}
                          </p>

                          <button
                            onClick={() => addToQuote(product)}
                            disabled={isAdded}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem',
                              borderRadius: 'var(--radius-md)',
                              border: 'none',
                              background: justAdded
                                ? 'rgba(34,197,94,0.1)'
                                : isAdded
                                ? 'var(--surface)'
                                : `${activeService.color}10`,
                              color: justAdded ? '#22c55e' : isAdded ? 'var(--text-muted)' : activeService.color,
                              fontWeight: 600,
                              fontSize: '0.8125rem',
                              cursor: isAdded ? 'default' : 'pointer',
                              transition: 'all 0.3s',
                            }}
                          >
                            {justAdded ? (
                              <>✓ Eklendi!</>
                            ) : isAdded ? (
                              <>Listede ✓</>
                            ) : (
                              <><Plus size={16} /> Teklif Listeme Ekle</>
                            )}
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
            onClick={() => setIsQuoteOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-2xl)',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '80vh',
                overflow: 'auto',
                boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: '1.5rem 2rem',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                background: 'var(--surface-card)',
                borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
                zIndex: 10,
              }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Teklif Listem</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {quoteItems.length} ürün seçildi
                  </p>
                </div>
                <button
                  onClick={() => setIsQuoteOpen(false)}
                  style={{
                    background: 'var(--surface)',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items */}
              <div style={{ padding: '1.5rem 2rem' }}>
                {quoteItems.length === 0 ? (
                  <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem 0' }}>
                    Henüz ürün eklenmedi.
                  </p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {quoteItems.map((item) => (
                      <div
                        key={item.product.id}
                        style={{
                          padding: '1rem',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid var(--border)',
                          background: 'var(--surface)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <div>
                            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{item.product.title}</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.category}</span>
                          </div>
                          <button
                            onClick={() => removeFromQuote(item.product.id)}
                            style={{
                              background: 'rgba(239,68,68,0.08)',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '0.375rem',
                              cursor: 'pointer',
                              color: '#ef4444',
                            }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.5rem' }}>
                          <input
                            type="text"
                            value={item.quantity}
                            onChange={(e) => updateQuoteItem(item.product.id, 'quantity', e.target.value)}
                            placeholder="Adet"
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: '8px',
                              border: '1px solid var(--border)',
                              fontSize: '0.8125rem',
                              background: 'white',
                              outline: 'none',
                            }}
                          />
                          <input
                            type="text"
                            value={item.notes}
                            onChange={(e) => updateQuoteItem(item.product.id, 'notes', e.target.value)}
                            placeholder="Not (opsiyonel)"
                            style={{
                              padding: '0.5rem 0.75rem',
                              borderRadius: '8px',
                              border: '1px solid var(--border)',
                              fontSize: '0.8125rem',
                              background: 'white',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              {quoteItems.length > 0 && (
                <div style={{
                  padding: '1.5rem 2rem',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  position: 'sticky',
                  bottom: 0,
                  background: 'var(--surface-card)',
                  borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
                }}>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp ile Gönder
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}?subject=Teklif Talebi&body=${generateWhatsAppMessage()}`}
                    className="btn-secondary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Send size={16} />
                    E-posta Gönder
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
