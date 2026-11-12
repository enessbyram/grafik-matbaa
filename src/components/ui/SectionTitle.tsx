import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center max-w-3xl mx-auto mb-16' : 'max-w-3xl mb-16'}>
      {badge && (
        <ScrollReveal>
          <span
            style={{
              display: 'inline-block',
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              background: light ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.1)',
              color: light ? '#22d3ee' : '#06b6d4',
              border: `1px solid ${light ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.15)'}`,
            }}
          >
            {badge}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem',
            color: light ? '#f8fafc' : 'var(--text-primary)',
          }}
        >
          {title}{' '}
          {highlight && (
            <span className="gradient-text">{highlight}</span>
          )}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: light ? 'var(--text-on-dark-muted)' : 'var(--text-secondary)',
              maxWidth: '42rem',
              margin: centered ? '0 auto' : undefined,
            }}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
