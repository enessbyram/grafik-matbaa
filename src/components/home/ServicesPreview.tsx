import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { serviceCategories } from '../../data/siteData';

export default function ServicesPreview() {
  return (
    <section className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <SectionTitle
          badge="Hizmetlerimiz"
          title="Neler"
          highlight="Yapıyoruz?"
          description="Grafik tasarımdan matbaaya, promosyon ürünlerinden otel tekstiline kadar geniş bir yelpazede hizmet sunuyoruz."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.id} delay={index * 0.1}>
                <Link
                  to="/hizmetler"
                  className="card"
                  style={{
                    display: 'block',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                >
                  {/* Accent Line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${category.color}, transparent)`,
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                  }} />

                  {/* Category Image Banner */}
                  <div style={{
                    height: '140px',
                    margin: '-2rem -2rem 1.25rem -2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={category.products[0]?.image}
                      alt={category.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, var(--surface-card) 0%, rgba(10,22,40,0.3) 100%)',
                      pointerEvents: 'none',
                    }} />
                    {/* Floating Icon */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '1.5rem',
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(10, 22, 40, 0.75)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${category.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon size={22} style={{ color: category.color }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                  }}>
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                  }}>
                    {category.description}
                  </p>

                  {/* Products Preview */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.375rem',
                    marginBottom: '1.25rem',
                  }}>
                    {category.products.slice(0, 3).map((product) => (
                      <span
                        key={product.id}
                        style={{
                          fontSize: '0.6875rem',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                          background: 'var(--surface-dark)',
                          color: 'var(--text-secondary)',
                          fontWeight: 500,
                        }}
                      >
                        {product.title}
                      </span>
                    ))}
                    {category.products.length > 3 && (
                      <span style={{
                        fontSize: '0.6875rem',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '9999px',
                        background: `${category.color}10`,
                        color: category.color,
                        fontWeight: 600,
                      }}>
                        +{category.products.length - 3} daha
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: category.color,
                  }}>
                    Detayları Gör <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
