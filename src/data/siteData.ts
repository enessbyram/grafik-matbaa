import {
  ShoppingBag,
  Hotel,
  Printer,
  Stamp,
  SunMedium,
  Zap,
  Target,
  Layers,
  type LucideIcon,
} from 'lucide-react';

/* ========================================
   Service Categories & Products
   ======================================== */

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  products: Product[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'bez-canta',
    title: 'Bez Çanta',
    description: 'Doğa dostu, şık ve dayanıklı bez çanta çözümleri ile markanızı taşıyın.',
    icon: ShoppingBag,
    color: '#06b6d4',
    products: [
      {
        id: 'ham-bez-canta',
        title: 'Ham Bez Çanta',
        description: 'Doğal pamuklu ham bez kumaştan üretilen, serigrafi ve dijital baskıya uygun promosyon çantalar.',
        image: '/products/ham-bez-canta.jpg',
      },
      {
        id: 'tela-canta',
        title: 'Tela Çanta',
        description: 'Hafif ve ekonomik tela kumaştan üretilen, fuar ve etkinlikler için ideal çanta modelleri.',
        image: '/products/tela-canta.jpg',
      },
      {
        id: 'kanvas-canta',
        title: 'Kanvas Çanta',
        description: 'Kalın ve dayanıklı kanvas kumaştan üretilen, premium hissiyat sunan el ve omuz çantaları.',
        image: '/products/kanvas-canta.jpg',
      },
      {
        id: 'jut-canta',
        title: 'Jüt Çanta',
        description: 'Doğal jüt lifinden üretilen, çevre dostu ve rustik görünümlü organik çantalar.',
        image: '/products/jut-canta.jpg',
      },
    ],
  },
  {
    id: 'otel-grubu',
    title: 'Otel Grubu',
    description: 'Otel ve konaklama sektörüne özel, logolu ve markalı tekstil ürünleri.',
    icon: Hotel,
    color: '#8b5cf6',
    products: [
      {
        id: 'otel-terlik',
        title: 'Otel Terliği',
        description: 'Tek kullanımlık ve yıkanabilir otel terlikleri, logolu özel üretim seçenekleriyle.',
        image: '/products/otel-terlik.jpg',
      },
      {
        id: 'otel-havlu',
        title: 'Havlu',
        description: 'Jakarlı logo dokuma ve nakış işlemeli, farklı gramajlarda otel havluları.',
        image: '/products/otel-havlu.jpg',
      },
      {
        id: 'otel-carsaf',
        title: 'Çarşaf & Nevresim',
        description: 'Otel standartlarına uygun, dayanıklı kumaşlardan üretilen yatak tekstili setleri.',
        image: '/products/otel-carsaf.jpg',
      },
      {
        id: 'otel-bornoz',
        title: 'Bornoz',
        description: 'Logolu nakış işlemeli, yumuşak ve kaliteli kumaştan üretilen misafir bornozları.',
        image: '/products/otel-bornoz.jpg',
      },
    ],
  },
  {
    id: 'baski-teknikleri',
    title: 'Baskı Teknikleri',
    description: 'Profesyonel baskı tekniklerimizle ürünlerinize değer katıyoruz.',
    icon: Printer,
    color: '#ec4899',
    products: [
      {
        id: 'sapka-baski',
        title: 'Şapka Baskı',
        description: 'Nakış, transfer ve serigrafi yöntemleriyle şapka üzerine yüksek kaliteli baskı ve logo uygulamaları.',
        image: '/products/sapka-baski.jpg',
      },
      {
        id: 'uv-baski',
        title: 'UV Baskı',
        description: 'Ahşap, metal, cam ve plastik gibi her yüzeye ultra-violet kürleme teknolojisiyle kalıcı baskı.',
        image: '/products/uv-baski.jpg',
      },
      {
        id: 'lazer-markalama',
        title: 'Lazer Markalama',
        description: 'Metal, deri ve ahşap yüzeylere hassas ve kalıcı lazer kazıma ile markalama çözümleri.',
        image: '/products/lazer-markalama.jpg',
      },
      {
        id: 'serigrafi-baski',
        title: 'Serigrafi Baskı',
        description: 'Tekstil, kağıt ve plastik üzerine kalıp hazırlama ile seri üretim baskı çözümleri.',
        image: '/products/serigrafi-baski.jpg',
      },
      {
        id: 'ofset-baski',
        title: 'Ofset Baskı',
        description: 'Yüksek tirajlı basılı materyal üretimi için profesyonel ofset baskı hizmetleri.',
        image: '/products/ofset-baski.jpg',
      },
    ],
  },
  {
    id: 'promosyon',
    title: 'Promosyon Ürünleri',
    description: 'Marka bilinirliğinizi artıracak yaratıcı ve kaliteli promosyon ürünleri.',
    icon: Target,
    color: '#f59e0b',
    products: [
      {
        id: 'kalem',
        title: 'Promosyon Kalem',
        description: 'Logolu baskılı metal ve plastik promosyon kalemleri, kurumsal hediye seçenekleri.',
        image: '/products/kalem.jpg',
      },
      {
        id: 'ajanda',
        title: 'Ajanda & Defter',
        description: 'Özel tasarım kapak ve iç sayfa düzeniyle kurumsal ajanda ve not defterleri.',
        image: '/products/ajanda.jpg',
      },
      {
        id: 'bardak',
        title: 'Kupa & Bardak',
        description: 'Sublimasyon baskılı seramik kupalar ve termos bardaklar, kişiselleştirme seçenekleriyle.',
        image: '/products/bardak.jpg',
      },
      {
        id: 'usb-bellek',
        title: 'USB Bellek',
        description: 'Özel tasarım logolu USB bellekler, kurumsal tanıtım ve hediye amaçlı.',
        image: '/products/usb-bellek.jpg',
      },
    ],
  },
];

/* ========================================
   Print Techniques (for interactive showcase)
   ======================================== */

export interface PrintTechnique {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: LucideIcon;
  color: string;
  advantages: string[];
}

export const printTechniques: PrintTechnique[] = [
  {
    id: 'uv',
    title: 'UV Baskı',
    shortDesc: 'Her yüzeye kalıcı baskı',
    longDesc: 'Ultraviyole ışınlarla anında kuruyan özel mürekkepler kullanılarak metal, cam, ahşap, plastik ve daha birçok yüzeye yüksek çözünürlüklü baskı yapılır.',
    icon: SunMedium,
    color: '#06b6d4',
    advantages: ['Her yüzeye uygulanabilir', 'Anlık kuruma', 'Yüksek çözünürlük', 'Solmaya karşı dayanıklı'],
  },
  {
    id: 'lazer',
    title: 'Lazer Markalama',
    shortDesc: 'Hassas ve kalıcı kazıma',
    longDesc: 'Yoğunlaştırılmış lazer ışını ile metal, deri, ahşap ve plastik yüzeylere son derece hassas ve kalıcı işaretleme yapılır.',
    icon: Zap,
    color: '#ec4899',
    advantages: ['Ultra hassas detay', 'Kalıcı işaretleme', 'Sarf malzemesi yok', 'Hızlı üretim'],
  },
  {
    id: 'serigrafi',
    title: 'Serigrafi',
    shortDesc: 'Seri üretimde lider',
    longDesc: 'Kalıp üzerinden mürekkep geçirilerek tekstil, kağıt ve diğer yüzeylere baskı yapılan, yüksek adetli üretimlerde en ekonomik yöntem.',
    icon: Layers,
    color: '#8b5cf6',
    advantages: ['Yüksek adet ekonomik', 'Canlı renkler', 'Çok yüzeye uygun', 'Dayanıklı baskı'],
  },
  {
    id: 'ofset',
    title: 'Ofset Baskı',
    shortDesc: 'Profesyonel matbaa kalitesi',
    longDesc: 'Yüksek tirajlı broşür, katalog, dergi ve kurumsal basılı materyaller için endüstriyel kalitede ofset baskı hizmeti.',
    icon: Stamp,
    color: '#f59e0b',
    advantages: ['Profesyonel kalite', 'Yüksek tiraj avantajı', 'Pantone renk eşleme', 'Geniş kağıt seçenekleri'],
  },
];

/* ========================================
   Corporate Info
   ======================================== */

export const companyInfo = {
  name: 'ALB',
  fullName: 'ALB Tekstil Baskı Boya Sanayi',
  slogan: 'Fikirlerinizi Hayata Baskıyoruz',
  description: 'Tekstil baskı ve boya sanayisinde yenilikçi çözümler, modern teknoloji ve yüksek kalite anlayışıyla markanıza değer katıyoruz.',
  founded: '2010',
  
  mission: 'Müşterilerimizin marka değerini en üst düzeye çıkarmak için yenilikçi tekstil baskı ve boya çözümleri sunmak. Kalite, güvenilirlik ve müşteri memnuniyetini her zaman ön planda tutarak sektörde fark yaratmak.',
  
  vision: 'Türkiye\'nin lider tekstil baskı ve boya firmalarından biri olmak. Sürdürülebilir üretim anlayışıyla çevre dostu malzemeler kullanarak sektöre yön vermek ve global pazarda söz sahibi olmak.',
  
  values: [
    'Kalite odaklı üretim',
    'Müşteri memnuniyeti',
    'Yenilikçi çözümler',
    'Zamanında teslimat',
    'Çevre bilinci',
    'Şeffaf iletişim',
  ],

  taxOffice: {
    name: 'Denizli Vergi Dairesi',
    number: '1234567890',
    tradeRegister: 'Denizli Ticaret Sicil No: 12345',
    mersisNo: '0123456789012345',
  },

  bankAccounts: [
    {
      bank: 'Ziraat Bankası',
      branch: 'Denizli Şubesi',
      accountHolder: 'ALB Tekstil Baskı Boya Sanayi',
      iban: 'TR00 0001 0000 0000 0000 0000 00',
      currency: 'TRY',
    },
    {
      bank: 'İş Bankası',
      branch: 'Denizli Şubesi',
      accountHolder: 'ALB Tekstil Baskı Boya Sanayi',
      iban: 'TR00 0006 4000 0000 0000 0000 00',
      currency: 'TRY',
    },
    {
      bank: 'Garanti BBVA',
      branch: 'Denizli Şubesi',
      accountHolder: 'ALB Tekstil Baskı Boya Sanayi',
      iban: 'TR00 0006 2000 0000 0000 0000 00',
      currency: 'TRY',
    },
  ],
};

/* ========================================
   Contact Info
   ======================================== */

export const contactInfo = {
  address: 'Akçeşme Mh. Ertuğrul Gazi Cad. No.57/1 Merkezefendi / DENİZLİ',
  phone: '0532 636 44 10',
  mobile: '0532 636 44 10',
  email: 'info@albtekstil.com',
  whatsapp: '905326364410',
  website: 'www.albtekstil.com',
  
  socialMedia: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },

  workingHours: {
    weekdays: '08:30 - 18:00',
    saturday: '09:00 - 14:00',
    sunday: 'Kapalı',
  },
};

/* ========================================
   Stats
   ======================================== */

export const stats = [
  { value: 14, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 3500, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 850, suffix: '+', label: 'Mutlu Müşteri' },
  { value: 120, suffix: '+', label: 'Ürün Çeşidi' },
];

/* ========================================
   References / Clients
   ======================================== */

export const references: string[] = [
  'Pamukkale Üniversitesi',
  'Denizli Büyükşehir Belediyesi',
  'ÖzDeniz Otel Grubu',
  'Babadağ Tekstil A.Ş.',
  'Cardak Havayolları',
  'Deniz Termal Resort',
  'Ege Promosyon Ltd.',
  'Hierapolis Turizm',
  'Laodicea Hotels',
  'Pamukkale Turizm',
  'Denizli Ticaret Odası',
  'Servergazi Hastanesi',
];

/* ========================================
   Navigation
   ======================================== */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'İletişim', href: '/iletisim' },
];
