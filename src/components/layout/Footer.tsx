import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

/* Inline SVG icon components for brand logos (lucide-react removed brand icons) */
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);
import { companyInfo, contactInfo, navItems, serviceCategories } from '../../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--primary)', color: 'var(--text-on-dark)' }}>
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
        }}>
          {/* Company Info */}
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-block',
                marginBottom: '1.5rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <img
                src="/logo-white.png"
                alt={companyInfo.fullName}
                style={{
                  height: '68px',
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-on-dark-muted)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '300px' }}>
              {companyInfo.description}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: InstagramIcon, href: contactInfo.socialMedia.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: contactInfo.socialMedia.facebook, label: 'Facebook' },
                { icon: LinkedinIcon, href: contactInfo.socialMedia.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => {
                const isPlaceholder = !href || href === '#';
                return (
                  <a
                    key={label}
                    href={isPlaceholder ? undefined : href}
                    target={isPlaceholder ? undefined : '_blank'}
                    rel={isPlaceholder ? undefined : 'noopener noreferrer'}
                    onClick={(e) => {
                      if (isPlaceholder) e.preventDefault();
                    }}
                    aria-label={label}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-on-dark-muted)',
                      transition: 'all 0.3s',
                      cursor: isPlaceholder ? 'default' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(6,182,212,0.15)';
                      e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)';
                      e.currentTarget.style.color = '#22d3ee';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'var(--text-on-dark-muted)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>
              Hızlı Bağlantılar
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-on-dark-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#22d3ee';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-on-dark-muted)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowUpRight size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>
              Hizmetlerimiz
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to="/hizmetler"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-on-dark-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#22d3ee';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-on-dark-muted)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowUpRight size={14} />
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Working Hours */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>
              İletişim & Çalışma Saatleri
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#06b6d4', marginTop: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)', lineHeight: 1.6 }}>
                  {contactInfo.address}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#06b6d4', flexShrink: 0 }} />
                <a href={`tel:${contactInfo.phone}`} style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#22d3ee'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-on-dark-muted)'; }}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#06b6d4', flexShrink: 0 }} />
                <a href={`mailto:${contactInfo.email}`} style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#22d3ee'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-on-dark-muted)'; }}
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* Working Hours */}
              <div style={{
                marginTop: '0.5rem',
                padding: '1rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Clock size={14} style={{ color: '#06b6d4' }} />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'white' }}>Çalışma Saatleri</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>Pazartesi - Cuma</span>
                    <span style={{ color: '#22d3ee', fontWeight: 500 }}>{contactInfo.workingHours.weekdays}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>Cumartesi</span>
                    <span style={{ color: '#22d3ee', fontWeight: 500 }}>{contactInfo.workingHours.saturday}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-on-dark-muted)' }}>Pazar</span>
                    <span style={{ color: '#ef4444', fontWeight: 500 }}>{contactInfo.workingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)' }}>
            © {currentYear} {companyInfo.fullName} Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
