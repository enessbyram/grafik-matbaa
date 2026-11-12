import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import SectionTitle from '../ui/SectionTitle';
import { printTechniques } from '../../data/siteData';
import { Check } from 'lucide-react';

export default function PrintTechniques() {
  const [activeTech, setActiveTech] = useState(printTechniques[0].id);
  const active = printTechniques.find((t) => t.id === activeTech)!;

  return (
    <section className="section-padding" style={{ background: 'var(--primary)', overflow: 'hidden' }}>
      <div className="container">
        <SectionTitle
          badge="Baskı Teknikleri"
          title="Profesyonel"
          highlight="Baskı Çözümleri"
          description="Farklı yüzey ve malzemelere uygun, en son teknoloji baskı yöntemleriyle ürünlerinizi öne çıkarın."
          light
        />

        {/* Technique Tabs */}
        <ScrollReveal>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
          }}>
            {printTechniques.map((tech) => {
              const isActive = activeTech === tech.id;
              const Icon = tech.icon;
              return (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: `1px solid ${isActive ? tech.color + '50' : 'rgba(255,255,255,0.08)'}`,
                    background: isActive ? tech.color + '15' : 'rgba(255,255,255,0.03)',
                    color: isActive ? tech.color : 'var(--text-on-dark-muted)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  <Icon size={18} />
                  {tech.title}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Technique Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              padding: '2.5rem',
              borderRadius: 'var(--radius-2xl)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Left: Visual */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              background: `linear-gradient(135deg, ${active.color}15, ${active.color}05)`,
              border: `1px solid ${active.color}20`,
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '280px',
            }}>
              {/* Shimmer Effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, transparent 30%, ${active.color}10 50%, transparent 70%)`,
                animation: 'shimmer 3s ease-in-out infinite',
              }} />
              
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <active.icon size={80} style={{ color: active.color, opacity: 0.8 }} />
              </motion.div>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                  {active.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: active.color, fontWeight: 500 }}>
                  {active.shortDesc}
                </p>
              </div>
            </div>

            {/* Right: Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-on-dark-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                {active.longDesc}
              </p>

              <h4 style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Avantajlar
              </h4>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
              }}>
                {active.advantages.map((adv, i) => (
                  <motion.div
                    key={adv}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      background: `${active.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Check size={14} style={{ color: active.color }} />
                    </div>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)', fontWeight: 500 }}>
                      {adv}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
