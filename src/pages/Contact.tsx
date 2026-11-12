import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  User,
  Building2,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import { contactInfo, companyInfo } from '../data/siteData';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontFamily: 'inherit',
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
              İletişim
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1rem',
            }}>
              Bizimle <span className="gradient-text-accent">İletişime Geçin</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-on-dark-muted)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              Projeleriniz için size özel çözümler sunmaktan mutluluk duyarız. Formu doldurun veya doğrudan bize ulaşın.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{
        marginTop: '-2rem',
        position: 'relative',
        zIndex: 20,
        paddingBottom: '3rem',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}>
            {[
              {
                icon: MapPin,
                title: 'Adres',
                value: contactInfo.address,
                color: '#06b6d4',
                action: undefined,
              },
              {
                icon: Phone,
                title: 'Telefon',
                value: contactInfo.phone,
                color: '#8b5cf6',
                action: `tel:${contactInfo.phone}`,
              },
              {
                icon: Mail,
                title: 'E-posta',
                value: contactInfo.email,
                color: '#ec4899',
                action: `mailto:${contactInfo.email}`,
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                value: contactInfo.mobile,
                color: '#22c55e',
                action: `https://wa.me/${contactInfo.whatsapp}`,
              },
            ].map(({ icon: Icon, title, value, color, action }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div
                  className="card"
                  style={{
                    textAlign: 'center',
                    background: 'var(--surface-card)',
                    cursor: action ? 'pointer' : 'default',
                    height: '100%',
                  }}
                  onClick={() => action && (action.startsWith('http') ? window.open(action, '_blank') : window.location.href = action)}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${color}12`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding" style={{ background: 'var(--surface)', paddingTop: '2rem' }}>
        <div className="container">
          <SectionTitle
            badge="İletişim Formu"
            title="Size"
            highlight="Nasıl Yardımcı Olabiliriz?"
            description="Aşağıdaki formu doldurarak bize mesajınızı iletebilirsiniz. En kısa sürede size dönüş yapacağız."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
            className="contact-grid"
          >
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      textAlign: 'center',
                      padding: '3rem 1rem',
                    }}
                  >
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(34,197,94,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}>
                      <CheckCircle size={32} style={{ color: '#22c55e' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Mesajınız İletildi!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                      En kısa sürede size dönüş yapacağız.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                          <User size={14} /> Adınız Soyadınız *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Adınız Soyadınız"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#06b6d4';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                          <Building2 size={14} /> Firma Adı
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Firma Adı (opsiyonel)"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#06b6d4';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                          <Mail size={14} /> E-posta *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ornek@email.com"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#06b6d4';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                          <Phone size={14} /> Telefon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0532 636 44 10"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = '#06b6d4';
                            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Konu *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' as const }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#06b6d4';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <option value="">Konu Seçiniz</option>
                        <option value="teklif">Fiyat Teklifi</option>
                        <option value="bilgi">Bilgi Almak İstiyorum</option>
                        <option value="siparis">Sipariş Takibi</option>
                        <option value="isvbirligi">İş Birliği</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                        Mesajınız *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#06b6d4';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6,182,212,0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                      <Send size={16} />
                      Mesajı Gönder
                    </button>
                  </>
                )}
              </form>
            </ScrollReveal>

            {/* Info Side */}
            <ScrollReveal direction="right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Map Placeholder */}
                <div style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  height: '300px',
                  background: 'var(--surface-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Ak%C3%A7e%C5%9Fme+Mh.+Ertu%C4%9Frul+Gazi+Cad.+No:57/1+Merkezefendi+Denizli&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="ALB Tekstil Baskı Boya Sanayi Konum"
                  />
                </div>

                {/* Working Hours Card */}
                <div className="card" style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(6,182,212,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Clock size={20} style={{ color: '#22d3ee' }} />
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Çalışma Saatleri</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { day: 'Pazartesi - Cuma', hours: contactInfo.workingHours.weekdays, active: true },
                      { day: 'Cumartesi', hours: contactInfo.workingHours.saturday, active: true },
                      { day: 'Pazar', hours: contactInfo.workingHours.sunday, active: false },
                    ].map((item) => (
                      <div
                        key={item.day}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-on-dark-muted)' }}>{item.day}</span>
                        <span style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: item.active ? '#22d3ee' : '#ef4444',
                        }}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                  onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MessageCircle size={24} style={{ color: 'white' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9375rem' }}>Hızlı İletişim</div>
                      <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.8)' }}>WhatsApp ile yazın</div>
                    </div>
                  </div>
                  <div style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                  }}>
                    {contactInfo.mobile}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Info Banner */}
      <section style={{
        padding: '3rem 0',
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border)',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {companyInfo.fullName}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            {contactInfo.address}
          </p>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
