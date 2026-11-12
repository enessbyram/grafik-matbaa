import ScrollReveal from '../ui/ScrollReveal';
import { references } from '../../data/siteData';

export default function ReferencesSection() {
  // Duplicate for seamless infinite scroll
  const allRefs = [...references, ...references];

  return (
    <section className="section-padding" style={{ background: 'var(--surface)', overflow: 'hidden' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: 'rgba(6,182,212,0.1)',
              color: '#06b6d4',
              border: '1px solid rgba(6,182,212,0.15)',
              marginBottom: '1rem',
            }}>
              Referanslarımız
            </span>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
            }}>
              Güvenle Çalıştığımız <span className="gradient-text">Markalar</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Marquee */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '1rem 0',
        }}>
          {/* Fade edges */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(90deg, var(--surface), transparent)',
            zIndex: 10,
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100px',
            background: 'linear-gradient(270deg, var(--surface), transparent)',
            zIndex: 10,
          }} />

          <div className="animate-marquee" style={{
            display: 'flex',
            gap: '2rem',
            width: 'fit-content',
          }}>
            {allRefs.map((ref, i) => (
              <div
                key={`${ref}-${i}`}
                style={{
                  flexShrink: 0,
                  padding: '1rem 2rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  minWidth: '200px',
                  transition: 'all 0.3s',
                }}
              >
                {ref}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
