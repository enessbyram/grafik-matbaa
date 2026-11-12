import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Eye,
  Building2,
  Landmark,
  Copy,
  Check,
  Download,
  Shield,
  Award,
  Heart,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/home/CTASection';
import { companyInfo } from '../data/siteData';

type TabId = 'misyon' | 'vizyon' | 'vergi' | 'banka';

const tabs: { id: TabId; label: string; icon: typeof Target }[] = [
  { id: 'misyon', label: 'Misyon', icon: Target },
  { id: 'vizyon', label: 'Vizyon', icon: Eye },
  { id: 'vergi', label: 'Vergi Bilgileri', icon: Building2 },
  { id: 'banka', label: 'Banka Hesapları', icon: Landmark },
];

export default function Corporate() {
  const [activeTab, setActiveTab] = useState<TabId>('misyon');
  const [copiedIban, setCopiedIban] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ''));
    setCopiedIban(id);
    setTimeout(() => setCopiedIban(null), 2000);
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
          position: 'absolute',
          inset: 0,
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
              Kurumsal
            </span>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '1rem',
            }}>
              Bizi Yakından <span className="gradient-text-accent">Tanıyın</span>
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-on-dark-muted)',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <SectionTitle
            badge="Değerlerimiz"
            title="İlkelerimizle"
            highlight="Yol Alıyoruz"
            description="Her projede bizi yönlendiren temel değerlerimiz."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {companyInfo.values.map((value, i) => {
              const icons = [Shield, Award, Target, Heart, Eye, Building2];
              const colors = ['#06b6d4', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#22c55e'];
              const Icon = icons[i % icons.length];
              return (
                <ScrollReveal key={value} delay={i * 0.1}>
                  <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${colors[i]}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                    }}>
                      <Icon size={22} style={{ color: colors[i] }} />
                    </div>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding" style={{ background: 'var(--surface-card)' }}>
        <div className="container">
          {/* Tab Navigation */}
          <ScrollReveal>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '3rem',
              padding: '0.375rem',
              background: 'var(--surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border)',
            }}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: '1 1 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem 1.5rem',
                      borderRadius: 'var(--radius-lg)',
                      border: 'none',
                      background: isActive ? 'white' : 'transparent',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                    }}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'misyon' && (
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(6,182,212,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Target size={28} style={{ color: '#06b6d4' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Misyonumuz</h3>
                  </div>
                  <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    {companyInfo.mission}
                  </p>
                </div>
              )}

              {activeTab === 'vizyon' && (
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(139,92,246,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Eye size={28} style={{ color: '#8b5cf6' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Vizyonumuz</h3>
                  </div>
                  <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                    {companyInfo.vision}
                  </p>
                </div>
              )}

              {activeTab === 'vergi' && (
                <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(236,72,153,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Building2 size={28} style={{ color: '#ec4899' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Vergi Dairesi Bilgileri</h3>
                  </div>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {[
                      { label: 'Firma Ünvanı', value: companyInfo.fullName },
                      { label: 'Vergi Dairesi', value: companyInfo.taxOffice.name },
                      { label: 'Vergi Numarası', value: companyInfo.taxOffice.number },
                      { label: 'Ticaret Sicil', value: companyInfo.taxOffice.tradeRegister },
                      { label: 'MERSİS No', value: companyInfo.taxOffice.mersisNo },
                    ].map((item) => (
                      <div
                        key={item.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '1rem 1.25rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--surface)',
                          border: '1px solid var(--border-light)',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}
                      >
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                          {item.label}
                        </span>
                        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'banka' && (
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
                  {companyInfo.bankAccounts.map((account, i) => (
                    <div key={i} className="card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '12px',
                              background: 'rgba(6,182,212,0.1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                              <Landmark size={22} style={{ color: '#06b6d4' }} />
                            </div>
                            <div>
                              <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>{account.bank}</h4>
                              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{account.branch}</p>
                            </div>
                          </div>
                          <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>Hesap Sahibi:</span>
                              <span style={{ fontWeight: 600 }}>{account.accountHolder}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem', alignItems: 'center' }}>
                              <span style={{ color: 'var(--text-secondary)' }}>IBAN:</span>
                              <code style={{
                                fontWeight: 600,
                                fontFamily: 'monospace',
                                background: 'var(--surface)',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.8125rem',
                              }}>
                                {account.iban}
                              </code>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => copyToClipboard(account.iban, `iban-${i}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.625rem 1.25rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border)',
                            background: copiedIban === `iban-${i}` ? 'rgba(34,197,94,0.1)' : 'var(--surface)',
                            color: copiedIban === `iban-${i}` ? '#22c55e' : 'var(--text-secondary)',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          {copiedIban === `iban-${i}` ? <Check size={14} /> : <Copy size={14} />}
                          {copiedIban === `iban-${i}` ? 'Kopyalandı!' : 'IBAN Kopyala'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Corporate Kit Download */}
          <ScrollReveal>
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                  Kurumsal Kit / Media Kit
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-on-dark-muted)' }}>
                  Logo, vergi levhası ve kurumsal bilgilerimizi içeren kit dosyasını indirin.
                </p>
              </div>
              <button className="btn-primary" style={{ flexShrink: 0 }}>
                <Download size={16} />
                Kit İndir
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
