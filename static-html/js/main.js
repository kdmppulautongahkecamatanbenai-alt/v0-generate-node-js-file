// Tropica Coco - Main JavaScript

// Translations
const translations = {
  en: {
    nav: { home: "Home", about: "About", products: "Products", blog: "Blog", contact: "Contact" },
    hero: { subheadline: "We supply premium desiccated coconut from certified Indonesian manufacturers to international food companies and distributors." },
    trust: { certifications: "Certifications", capacity: "Production Capacity", capacityValue: "500+ MT/Month" },
    products: { title: "Our Premium Products", highFat: "High Fat Desiccated Coconut", lowFat: "Low Fat Desiccated Coconut", fat: "Fat Content", moisture: "Moisture", grade: "Grade", color: "Color", impurities: "Impurities", ph: "pH Value", cta: "Request Quote" },
    why: { title: "Why Choose Tropica Coco?", quality: "Quality Assurance", qualityDesc: "Every batch meets international food safety standards.", reliable: "Reliable Supply", reliableDesc: "Consistent delivery from certified manufacturers.", docs: "Export Documentation", docsDesc: "Complete paperwork for smooth customs clearance.", communication: "Responsive Service", communicationDesc: "Quick response and support in your language." },
    supply: { title: "Direct from Source", desc: "We work directly with certified coconut processing facilities across Indonesia, ensuring consistent quality and reliable supply for your business needs." },
    docs: { title: "Export Documentation", invoice: "Commercial Invoice", packing: "Packing List", bol: "Bill of Lading", coo: "Certificate of Origin", phyto: "Phytosanitary Certificate", coa: "Certificate of Analysis" },
    packaging: { title: "Packaging & Shipping", style: "25kg kraft paper bags or as requested", shipping: "FOB / CIF / CFR available", containers: "20ft / 40ft containers" },
    cta: { title: "Ready to Order Premium Desiccated Coconut?", button: "Get Quote via WhatsApp" },
    footer: { quickLinks: "Quick Links", contact: "Contact", rights: "All rights reserved." },
    about: { title: "About Tropica Coco", subtitle: "Your trusted partner for premium Indonesian desiccated coconut.", desc1: "PT Tropica Coconut Indonesia is an Indonesian exporter focused on supplying desiccated coconut for international food and ingredient markets.", desc2: "We support importers, distributors, and food manufacturers with export-oriented coordination, consistent product specifications, and responsive communication.", strength1: "Serving clients in 30+ countries", strength2: "Complete export documentation", strength3: "Quality certified facilities", strength4: "Multilingual support team" },
    contact: { title: "Contact Us", subtitle: "Get in touch with our team for inquiries and quotes.", email: "Email", product: "Product Interest", quantity: "Quantity Needed", destination: "Destination Country", message: "Additional Message", submit: "Send Inquiry", whatsapp: "WhatsApp Us" }
  },
  id: {
    nav: { home: "Beranda", about: "Tentang", products: "Produk", blog: "Blog", contact: "Kontak" },
    hero: { subheadline: "Kami memasok kelapa parut premium dari produsen Indonesia bersertifikat ke perusahaan makanan dan distributor internasional." },
    trust: { certifications: "Sertifikasi", capacity: "Kapasitas Produksi", capacityValue: "500+ MT/Bulan" },
    products: { title: "Produk Premium Kami", highFat: "Kelapa Parut Lemak Tinggi", lowFat: "Kelapa Parut Lemak Rendah", fat: "Kadar Lemak", moisture: "Kelembaban", grade: "Grade", color: "Warna", impurities: "Kotoran", ph: "Nilai pH", cta: "Minta Penawaran" },
    why: { title: "Mengapa Memilih Tropica Coco?", quality: "Jaminan Kualitas", qualityDesc: "Setiap batch memenuhi standar keamanan pangan internasional.", reliable: "Pasokan Andal", reliableDesc: "Pengiriman konsisten dari produsen bersertifikat.", docs: "Dokumentasi Ekspor", docsDesc: "Dokumen lengkap untuk kelancaran bea cukai.", communication: "Layanan Responsif", communicationDesc: "Respon cepat dan dukungan dalam bahasa Anda." },
    supply: { title: "Langsung dari Sumber", desc: "Kami bekerja langsung dengan fasilitas pengolahan kelapa bersertifikat di seluruh Indonesia." },
    docs: { title: "Dokumentasi Ekspor", invoice: "Faktur Komersial", packing: "Daftar Kemasan", bol: "Bill of Lading", coo: "Sertifikat Asal", phyto: "Sertifikat Fitosanitari", coa: "Sertifikat Analisis" },
    packaging: { title: "Pengemasan & Pengiriman", style: "Kantong kertas kraft 25kg atau sesuai permintaan", shipping: "FOB / CIF / CFR tersedia", containers: "Kontainer 20ft / 40ft" },
    cta: { title: "Siap Memesan Kelapa Parut Premium?", button: "Dapatkan Penawaran via WhatsApp" },
    footer: { quickLinks: "Tautan Cepat", contact: "Kontak", rights: "Hak cipta dilindungi." },
    about: { title: "Tentang Tropica Coco", subtitle: "Mitra tepercaya Anda untuk kelapa parut premium Indonesia.", desc1: "PT Tropica Coconut Indonesia adalah eksportir Indonesia yang fokus memasok kelapa parut untuk pasar makanan dan bahan internasional.", desc2: "Kami mendukung importir, distributor, dan produsen makanan dengan koordinasi berorientasi ekspor.", strength1: "Melayani klien di 30+ negara", strength2: "Dokumentasi ekspor lengkap", strength3: "Fasilitas bersertifikat kualitas", strength4: "Tim dukungan multibahasa" },
    contact: { title: "Hubungi Kami", subtitle: "Hubungi tim kami untuk pertanyaan dan penawaran.", email: "Email", product: "Produk yang Diminati", quantity: "Jumlah yang Dibutuhkan", destination: "Negara Tujuan", message: "Pesan Tambahan", submit: "Kirim Pertanyaan", whatsapp: "WhatsApp Kami" }
  },
  pt: {
    nav: { home: "Início", about: "Sobre", products: "Produtos", blog: "Blog", contact: "Contato" },
    hero: { subheadline: "Fornecemos coco ralado premium de fabricantes indonésios certificados para empresas alimentícias internacionais." },
    trust: { certifications: "Certificações", capacity: "Capacidade de Produção", capacityValue: "500+ MT/Mês" },
    products: { title: "Nossos Produtos Premium", highFat: "Coco Ralado Alto Teor de Gordura", lowFat: "Coco Ralado Baixo Teor de Gordura", fat: "Teor de Gordura", moisture: "Umidade", grade: "Grau", color: "Cor", impurities: "Impurezas", ph: "Valor pH", cta: "Solicitar Cotação" },
    why: { title: "Por que Escolher Tropica Coco?", quality: "Garantia de Qualidade", qualityDesc: "Cada lote atende aos padrões internacionais de segurança alimentar.", reliable: "Fornecimento Confiável", reliableDesc: "Entrega consistente de fabricantes certificados.", docs: "Documentação de Exportação", docsDesc: "Documentação completa para liberação alfandegária.", communication: "Serviço Responsivo", communicationDesc: "Resposta rápida e suporte no seu idioma." },
    supply: { title: "Direto da Fonte", desc: "Trabalhamos diretamente com instalações certificadas de processamento de coco em toda a Indonésia." },
    docs: { title: "Documentação de Exportação", invoice: "Fatura Comercial", packing: "Lista de Embalagem", bol: "Conhecimento de Embarque", coo: "Certificado de Origem", phyto: "Certificado Fitossanitário", coa: "Certificado de Análise" },
    packaging: { title: "Embalagem e Envio", style: "Sacos de papel kraft 25kg ou conforme solicitado", shipping: "FOB / CIF / CFR disponível", containers: "Containers 20ft / 40ft" },
    cta: { title: "Pronto para Encomendar Coco Ralado Premium?", button: "Obter Cotação via WhatsApp" },
    footer: { quickLinks: "Links Rápidos", contact: "Contato", rights: "Todos os direitos reservados." },
    about: { title: "Sobre Tropica Coco", subtitle: "Seu parceiro confiável para coco ralado premium da Indonésia.", desc1: "PT Tropica Coconut Indonesia é um exportador indonésio focado em fornecer coco ralado para mercados internacionais.", desc2: "Apoiamos importadores, distribuidores e fabricantes de alimentos com coordenação orientada para exportação.", strength1: "Atendendo clientes em 30+ países", strength2: "Documentação de exportação completa", strength3: "Instalações certificadas de qualidade", strength4: "Equipe de suporte multilíngue" },
    contact: { title: "Entre em Contato", subtitle: "Entre em contato com nossa equipe para consultas e cotações.", email: "Email", product: "Produto de Interesse", quantity: "Quantidade Necessária", destination: "País de Destino", message: "Mensagem Adicional", submit: "Enviar Consulta", whatsapp: "WhatsApp" }
  },
  ru: {
    nav: { home: "Главная", about: "О нас", products: "Продукция", blog: "Блог", contact: "Контакты" },
    hero: { subheadline: "Мы поставляем премиальную кокосовую стружку от сертифицированных индонезийских производителей." },
    trust: { certifications: "Сертификаты", capacity: "Производственная мощность", capacityValue: "500+ МТ/месяц" },
    products: { title: "Наша премиальная продукция", highFat: "Кокосовая стружка с высоким содержанием жира", lowFat: "Кокосовая стружка с низким содержанием жира", fat: "Содержание жира", moisture: "Влажность", grade: "Сорт", color: "Цвет", impurities: "Примеси", ph: "Значение pH", cta: "Запросить цену" },
    why: { title: "Почему выбирают Tropica Coco?", quality: "Гарантия качества", qualityDesc: "Каждая партия соответствует международным стандартам.", reliable: "Надежные поставки", reliableDesc: "Стабильные поставки от сертифицированных производителей.", docs: "Экспортная документация", docsDesc: "Полный пакет документов для таможенного оформления.", communication: "Отзывчивый сервис", communicationDesc: "Быстрый ответ и поддержка на вашем языке." },
    supply: { title: "Напрямую от источника", desc: "Мы работаем напрямую с сертифицированными предприятиями по переработке кокоса в Индонезии." },
    docs: { title: "Экспортная документация", invoice: "Коммерческий счет", packing: "Упаковочный лист", bol: "Коносамент", coo: "Сертификат происхождения", phyto: "Фитосанитарный сертификат", coa: "Сертификат анализа" },
    packaging: { title: "Упаковка и доставка", style: "Крафт-мешки 25 кг или по запросу", shipping: "FOB / CIF / CFR доступны", containers: "Контейнеры 20ft / 40ft" },
    cta: { title: "Готовы заказать премиальную кокосовую стружку?", button: "Получить цену через WhatsApp" },
    footer: { quickLinks: "Быстрые ссылки", contact: "Контакты", rights: "Все права защищены." },
    about: { title: "О Tropica Coco", subtitle: "Ваш надежный партнер по премиальной индонезийской кокосовой стружке.", desc1: "PT Tropica Coconut Indonesia — индонезийский экспортер кокосовой стружки для международных рынков.", desc2: "Мы поддерживаем импортеров, дистрибьюторов и производителей продуктов питания.", strength1: "Обслуживаем клиентов в 30+ странах", strength2: "Полная экспортная документация", strength3: "Сертифицированные объекты", strength4: "Многоязычная команда поддержки" },
    contact: { title: "Свяжитесь с нами", subtitle: "Свяжитесь с нашей командой для запросов и предложений.", email: "Email", product: "Интересующий продукт", quantity: "Необходимое количество", destination: "Страна назначения", message: "Дополнительное сообщение", submit: "Отправить запрос", whatsapp: "WhatsApp" }
  },
  ar: {
    nav: { home: "الرئيسية", about: "عنا", products: "المنتجات", blog: "المدونة", contact: "اتصل بنا" },
    hero: { subheadline: "نحن نورد جوز الهند المجفف الممتاز من المصنعين الإندونيسيين المعتمدين للشركات الغذائية الدولية." },
    trust: { certifications: "الشهادات", capacity: "الطاقة الإنتاجية", capacityValue: "500+ طن/شهر" },
    products: { title: "منتجاتنا الممتازة", highFat: "جوز الهند المجفف عالي الدهون", lowFat: "جوز الهند المجفف منخفض الدهون", fat: "نسبة الدهون", moisture: "الرطوبة", grade: "الدرجة", color: "اللون", impurities: "الشوائب", ph: "قيمة pH", cta: "طلب عرض سعر" },
    why: { title: "لماذا تختار Tropica Coco؟", quality: "ضمان الجودة", qualityDesc: "كل دفعة تلبي معايير سلامة الغذاء الدولية.", reliable: "إمداد موثوق", reliableDesc: "تسليم متسق من مصنعين معتمدين.", docs: "وثائق التصدير", docsDesc: "أوراق كاملة للتخليص الجمركي السلس.", communication: "خدمة سريعة الاستجابة", communicationDesc: "استجابة سريعة ودعم بلغتك." },
    supply: { title: "مباشرة من المصدر", desc: "نحن نعمل مباشرة مع مرافق معالجة جوز الهند المعتمدة في جميع أنحاء إندونيسيا." },
    docs: { title: "وثائق التصدير", invoice: "الفاتورة التجارية", packing: "قائمة التعبئة", bol: "بوليصة الشحن", coo: "شهادة المنشأ", phyto: "الشهادة الصحية النباتية", coa: "شهادة التحليل" },
    packaging: { title: "التعبئة والشحن", style: "أكياس ورق كرافت 25 كجم أو حسب الطلب", shipping: "FOB / CIF / CFR متاح", containers: "حاويات 20 قدم / 40 قدم" },
    cta: { title: "هل أنت مستعد لطلب جوز الهند المجفف الممتاز؟", button: "احصل على عرض سعر عبر واتساب" },
    footer: { quickLinks: "روابط سريعة", contact: "اتصل بنا", rights: "جميع الحقوق محفوظة." },
    about: { title: "عن Tropica Coco", subtitle: "شريكك الموثوق لجوز الهند المجفف الإندونيسي الممتاز.", desc1: "PT Tropica Coconut Indonesia هي شركة تصدير إندونيسية تركز على توريد جوز الهند المجفف للأسواق الدولية.", desc2: "نحن ندعم المستوردين والموزعين ومصنعي المواد الغذائية.", strength1: "نخدم العملاء في أكثر من 30 دولة", strength2: "وثائق تصدير كاملة", strength3: "مرافق معتمدة الجودة", strength4: "فريق دعم متعدد اللغات" },
    contact: { title: "اتصل بنا", subtitle: "تواصل مع فريقنا للاستفسارات والعروض.", email: "البريد الإلكتروني", product: "المنتج المطلوب", quantity: "الكمية المطلوبة", destination: "بلد الوجهة", message: "رسالة إضافية", submit: "إرسال الاستفسار", whatsapp: "واتساب" }
  },
  zh: {
    nav: { home: "首页", about: "关于我们", products: "产品", blog: "博客", contact: "联系我们" },
    hero: { subheadline: "我们从印尼认证制造商向国际食品公司和分销商供应优质椰蓉。" },
    trust: { certifications: "认证", capacity: "生产能力", capacityValue: "500+ 吨/月" },
    products: { title: "我们的优质产品", highFat: "高脂椰蓉", lowFat: "低脂椰蓉", fat: "脂肪含量", moisture: "水分", grade: "等级", color: "颜色", impurities: "杂质", ph: "pH值", cta: "索取报价" },
    why: { title: "为什么选择 Tropica Coco？", quality: "质量保证", qualityDesc: "每批产品均符合国际食品安全标准。", reliable: "可靠供应", reliableDesc: "来自认证制造商的稳定交付。", docs: "出口文件", docsDesc: "完整的清关文件。", communication: "响应式服务", communicationDesc: "快速响应和您语言的支持。" },
    supply: { title: "直接来源", desc: "我们直接与印尼各地经过认证的椰子加工设施合作。" },
    docs: { title: "出口文件", invoice: "商业发票", packing: "装箱单", bol: "提单", coo: "原产地证书", phyto: "植物检疫证书", coa: "分析证书" },
    packaging: { title: "包装和运输", style: "25公斤牛皮纸袋或按要求", shipping: "FOB / CIF / CFR 可用", containers: "20英尺 / 40英尺 集装箱" },
    cta: { title: "准备订购优质椰蓉了吗？", button: "通过WhatsApp获取报价" },
    footer: { quickLinks: "快速链接", contact: "联系方式", rights: "版权所有。" },
    about: { title: "关于 Tropica Coco", subtitle: "您值得信赖的印尼优质椰蓉合作伙伴。", desc1: "PT Tropica Coconut Indonesia 是一家印尼出口商，专注于为国际食品市场供应椰蓉。", desc2: "我们支持进口商、分销商和食品制造商。", strength1: "服务30多个国家的客户", strength2: "完整的出口文件", strength3: "质量认证设施", strength4: "多语言支持团队" },
    contact: { title: "联系我们", subtitle: "联系我们的团队进行咨询和报价。", email: "电子邮件", product: "感兴趣的产品", quantity: "所需数量", destination: "目的地国家", message: "附加信息", submit: "发送询价", whatsapp: "WhatsApp" }
  }
};

const localeNames = {
  en: "English",
  id: "Indonesia",
  pt: "Português",
  ru: "Русский",
  ar: "العربية",
  zh: "中文"
};

// Current language
let currentLocale = 'en';

// Get translation
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLocale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

// Set language
function setLanguage(locale) {
  currentLocale = locale;
  localStorage.setItem('tropicoco-locale', locale);
  
  // Update HTML dir for RTL languages
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  // Update language display
  const langDisplay = document.querySelector('.lang-display');
  if (langDisplay) {
    langDisplay.textContent = localeNames[locale];
  }
  
  // Update all translatable elements
  updateTranslations();
}

// Update all translations on the page
function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Language dropdown toggle
function toggleLanguageDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
      dropdown.classList.remove('open');
    }
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language
  const savedLocale = localStorage.getItem('tropicoco-locale');
  if (savedLocale && translations[savedLocale]) {
    setLanguage(savedLocale);
  }
  
  // Setup language selector
  const langItems = document.querySelectorAll('.lang-item');
  langItems.forEach(item => {
    item.addEventListener('click', () => {
      const locale = item.getAttribute('data-locale');
      setLanguage(locale);
      toggleLanguageDropdown();
    });
  });
  
  // Setup mobile menu
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.querySelector('.mobile-menu');
      if (menu) {
        menu.classList.remove('open');
      }
    });
  });
  
  // Simple scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
  
  // Form submission
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Create WhatsApp message
      let message = `Hello, I'm interested in your desiccated coconut products.\n\n`;
      message += `Name: ${data.name || 'N/A'}\n`;
      message += `Email: ${data.email || 'N/A'}\n`;
      message += `Company: ${data.company || 'N/A'}\n`;
      message += `Product: ${data.product || 'N/A'}\n`;
      message += `Quantity: ${data.quantity || 'N/A'}\n`;
      message += `Destination: ${data.destination || 'N/A'}\n`;
      if (data.message) {
        message += `\nMessage: ${data.message}`;
      }
      
      // Open WhatsApp
      const whatsappUrl = `https://wa.me/6282284233857?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      const formContainer = contactForm.parentElement;
      formContainer.innerHTML = `
        <div class="form-success text-center" style="padding: 3rem 1rem;">
          <div class="icon-circle" style="margin: 0 auto;">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </div>
          <h3 style="margin-top: 1rem; font-size: 1.125rem; font-weight: 600;">Inquiry Sent Successfully!</h3>
          <p style="margin-top: 0.5rem; font-size: 0.875rem; color: #666;">We'll respond to your inquiry within 24 hours.</p>
          <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1.5rem;">Send Another Inquiry</button>
        </div>
      `;
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Typing Animation
class TypingAnimation {
  constructor(element, texts, options = {}) {
    this.element = element;
    this.texts = texts;
    this.options = {
      typeSpeed: options.typeSpeed || 80,
      deleteSpeed: options.deleteSpeed || 50,
      pauseTime: options.pauseTime || 2000,
      loop: options.loop !== undefined ? options.loop : true
    };
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.init();
  }

  init() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = this.options.pauseTime;
      if (this.options.loop || this.textIndex < this.texts.length - 1) {
        this.isDeleting = true;
      }
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typing animation on page load
document.addEventListener('DOMContentLoaded', function() {
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const texts = [
      'Desiccated Coconut',
      'Premium Quality',
      'Export Ready',
      'HACCP Certified'
    ];
    new TypingAnimation(typingElement, texts, {
      typeSpeed: 100,
      deleteSpeed: 60,
      pauseTime: 2500,
      loop: true
    });
  }
});
