import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { contactInfo } from '../../data/siteData';

export default function CTASection() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '6rem 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)
        `,
      }} />

      {/* Floating Circles */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
        }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'white',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            Projeniz İçin Hazır Mıyız?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '560px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Grafik tasarım ve matbaa ihtiyaçlarınız için hemen bizimle iletişime geçin. Size özel çözümler üretelim.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link
              to="/iletisim"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                borderRadius: 'var(--radius-lg)',
                background: 'white',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '1rem',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Teklif Al <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.15)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1rem',
                border: '2px solid rgba(255,255,255,0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
