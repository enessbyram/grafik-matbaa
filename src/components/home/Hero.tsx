import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/siteData';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            style={{
              position: 'absolute',
              top: `${15 + i * 12}%`,
              left: `${10 + i * 15}%`,
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              borderRadius: i % 2 === 0 ? '50%' : '3px',
              background: i % 3 === 0
                ? 'rgba(6,182,212,0.4)'
                : i % 3 === 1
                ? 'rgba(236,72,153,0.3)'
                : 'rgba(59,130,246,0.3)',
              border: `1px solid ${
                i % 3 === 0
                  ? 'rgba(6,182,212,0.3)'
                  : i % 3 === 1
                  ? 'rgba(236,72,153,0.2)'
                  : 'rgba(59,130,246,0.2)'
              }`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '120px', paddingBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '800px',
        }}>
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.2)',
                marginBottom: '1.5rem',
                color: '#22d3ee',
                fontSize: '0.8125rem',
                fontWeight: 600,
              }}
            >
              <Sparkles size={14} />
              ALB Tekstil Baskı Boya Sanayi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: 'white',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Fikirlerinizi{' '}
              <br />
              <span
                className="gradient-text-accent"
                style={{ display: 'inline-block' }}
              >
                Hayata Baskıyoruz
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.1875rem)',
                color: 'var(--text-on-dark-muted)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '2.5rem',
              }}
            >
              {companyInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
            >
              <Link to="/hizmetler" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Hizmetleri Keşfet
                <ArrowRight size={18} />
              </Link>
              <Link to="/iletisim" className="btn-outline-light" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Bizimle İletişime Geçin
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {[
            { value: '14+', label: 'Yıl Deneyim' },
            { value: '3500+', label: 'Proje' },
            { value: '850+', label: 'Mutlu Müşteri' },
            { value: '120+', label: 'Ürün Çeşidi' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem 2rem',
                background: 'rgba(10,22,40,0.6)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#22d3ee', marginBottom: '0.25rem' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-on-dark-muted)',
          fontSize: '0.75rem',
        }}
      >
        <span>Aşağı Kaydır</span>
        <div style={{
          width: '24px',
          height: '40px',
          borderRadius: '12px',
          border: '2px solid rgba(255,255,255,0.2)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px',
        }}>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: '#06b6d4',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
