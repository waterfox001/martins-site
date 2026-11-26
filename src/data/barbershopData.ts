import { BusinessInfo, ProductItem, ServiceItem, TestimonialItem } from '../types';

import barbaImg from '../assets/images/barba_service_1791077708008.jpg';
import toolsImg from '../assets/images/barber_tools_1791077721490.jpg';
import ceraImg from '../assets/images/cera_capilar_product_1791077686231.jpg';
const client01 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.53__1__86b3a36b.jpeg';
const client02 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.53_ba58634f.jpeg';
const client03 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54__1__bb0c6c3a.jpeg';
const client04 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54__2__68e30c2a.jpeg';
const client05 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54__3__2a92708a.jpeg';
const client06 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54__4__150c2ddb.jpeg';
const client07 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54__5__8dfc3765.jpeg';
const client08 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.54_307ee578.jpeg';
const client09 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55__1__e88626e6.jpeg';
const client10 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55__2__31868e9b.jpeg';
const client11 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55__3__fd14c78f.jpeg';
const client12 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55__4__bc7a7ecd.jpeg';
const client13 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55__5__100753e5.jpeg';
const client14 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.55_7611a2e2.jpeg';
const client15 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56__1__96c7c847.jpeg';
const client16 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56__2__18e5b1f0.jpeg';
const client17 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56__3__7fd1f905.jpeg';
const client18 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56__4__91806486.jpeg';
const client19 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56__5__b2417751.jpeg';
const client20 = '/assets/aistudio/WhatsApp_Image_2026-11-25_at_14.06.56_f3dd6ff0.jpeg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Barbearia O Martins',
  slogan: 'Seu estilo. Nossa tradição.',
  description: 'Corte, barba e cuidado masculino no Centro de Fortaleza.',
  phone: '(85) 99235-3320',
  whatsapp: '5585992998774',
  whatsappFormatted: '(85) 99299-8774',
  email: 'barbeariaomartins@gmail.com',
  instagram: 'https://www.instagram.com/barbearia.omartins/',
  instagramHandle: '@barbearia.omartins',
  address: {
    street: 'Av. Heráclito Graça',
    number: '710',
    neighborhood: 'Centro',
    city: 'Fortaleza',
    state: 'CE',
    country: 'Brasil',
    full: 'Av. Heráclito Graça, 710 — Centro, Fortaleza — CE',
  },
  openingHours: {
    weekdays: '09:00 às 19:00',
    saturday: '09:00 às 18:00',
    sunday: 'Fechado',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Her%C3%A1clito+Gra%C3%A7a%2C+710+-+Centro%2C+Fortaleza+-+CE',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corte-cabelo',
    name: 'Corte de Cabelo',
    description: 'Cortes masculinos pensados para valorizar o estilo e a personalidade de cada cliente.',
    price: 50,
    priceDisplay: 'R$ 50,00',
    duration: '45 min',
    image: client04,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar um corte na Barbearia O Martins.',
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Cuidado e acabamento para deixar a barba alinhada, definida e bem cuidada.',
    price: 35,
    priceDisplay: 'R$ 35,00',
    duration: '35 min',
    image: client03,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar uma barba na Barbearia O Martins.',
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    description: 'O combo completo de cuidado masculino: cabelo alinhado e barba impecável no mesmo atendimento com desconto exclusivo.',
    price: 75,
    priceDisplay: 'R$ 75,00',
    duration: '1h 15min',
    image: client18,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar corte e barba na Barbearia O Martins.',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'cera-capilar',
    name: 'Cera Capilar',
    category: 'Cabelo',
    description: 'Fixação duradoura e acabamento fosco/natural para modelar com precisão e manter o penteado no lugar ao longo do dia.',
    price: 45,
    priceDisplay: 'R$ 45,00',
    image: ceraImg,
    available: true,
    features: ['Acabamento natural', 'Alta fixação sem brilho excessivo', 'Fácil remoção na lavagem'],
  },
  {
    id: 'pomada-modeladora',
    name: 'Pomada Modeladora',
    category: 'Cabelo',
    description: 'Efeito matte de excelente sustentação para estruturar penteados clássicos e modernos sem ressecar os fios.',
    price: 45,
    priceDisplay: 'R$ 45,00',
    image: ceraImg,
    available: true,
    features: ['Efeito matte seco', 'Remodelável durante o dia', 'Aroma masculino suave'],
  },
  {
    id: 'oleo-barba',
    name: 'Óleo para Barba',
    category: 'Barba',
    description: 'Fórmula hidratante que amacia os fios rebeldes, perfuma suavemente e protege a pele sob a barba contra irritações.',
    price: 38,
    priceDisplay: 'R$ 38,00',
    image: toolsImg,
    available: true,
    features: ['Hidratação profunda', 'Toque seco não oleoso', 'Alinha os fios da barba'],
  },
  {
    id: 'balm-barba',
    name: 'Balm para Barba',
    category: 'Barba',
    description: 'Reduz o frizz, alinha o desenho da barba e proporciona refrescância e hidratação imediata no pós-barba ou rotina matinal.',
    price: 38,
    priceDisplay: 'R$ 38,00',
    image: barbaImg,
    available: true,
    features: ['Ação calmante e refrescante', 'Modela sem endurecer', 'Proteção diária dos fios'],
  },
  {
    id: 'shampoo-masculino',
    name: 'Shampoo Masculino',
    category: 'Cabelo',
    description: 'Limpeza profunda com sensação refrescante que remove resíduos de modeladores sem agredir o couro cabeludo.',
    price: 40,
    priceDisplay: 'R$ 40,00',
    image: toolsImg,
    available: true,
    features: ['Sensação refrescante', 'Controle da oleosidade', 'Uso diário'],
  },
];

// Avaliações reais fornecidas dos clientes no Google
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Carlota',
    rating: 5,
    comment: 'Fui hoje, sexta-feira, 21/Novembro cortar o cabelo com a dona Fran. Que mãos mágicas! Atendimento, recepção, ambiente: tudo muito agradável. Agradeço o atendimento e desejo muito, muito sucesso.',
  },
  {
    id: 'test-2',
    name: 'Nivaldo Neto',
    rating: 5,
    comment: 'O melhor atendimento, o melhor ambiente, localização incrível, sempre sou muito bem atendido. O corte é incrível! Recomendo!',
  },
  {
    id: 'test-3',
    name: 'João Carlos',
    rating: 5,
    comment: 'Ótimas instalações. Disponibilidade e atenção com clientes são fortes! Recomendo!',
  },
];

// Galeria de imagens
export const GALLERY_ITEMS = [
  {
    id: 'before-after-01-03',
    title: 'Antes e Depois',
    category: ['cortes', 'barba'],
    layout: 'before-after',
    images: [
      { image: client01, label: 'Antes', alt: 'Foto 01 — cliente antes do atendimento' },
      { image: client03, label: 'Depois', alt: 'Foto 03 — cliente após o atendimento' },
    ],
  },
  {
    id: 'before-after-02-15',
    title: 'Antes e Depois',
    category: ['cortes', 'barba'],
    layout: 'before-after',
    images: [
      { image: client02, label: 'Antes', alt: 'Foto 02 — cliente antes do atendimento' },
      { image: client15, label: 'Depois', alt: 'Foto 15 — cliente após o atendimento' },
    ],
  },
  {
    id: 'before-after-10-11',
    title: 'Antes e Depois',
    category: 'cortes',
    layout: 'before-after',
    images: [
      { image: client10, label: 'Antes', alt: 'Foto 10 — cliente antes do atendimento' },
      { image: client11, label: 'Depois', alt: 'Foto 11 — cliente após o atendimento' },
    ],
  },
  {
    id: 'finishes-children-1',
    title: 'Finalizações',
    category: 'cortes',
    layout: 'finalizations',
    images: [
      { image: client06, alt: 'Atendimento infantil na barbearia' },
      { image: client09, alt: 'Corte infantil finalizado' },
    ],
  },
  {
    id: 'finishes-children-2',
    title: 'Finalizações',
    category: 'cortes',
    layout: 'finalizations',
    images: [
      { image: client12, alt: 'Corte infantil finalizado' },
      { image: client13, alt: 'Corte infantil finalizado' },
    ],
  },
  {
    id: 'finishes-hair-1',
    title: 'Finalizações',
    category: 'cortes',
    layout: 'finalizations',
    images: [
      { image: client04, alt: 'Finalização de cabelo' },
      { image: client05, alt: 'Finalização de cabelo e barba' },
    ],
  },
  {
    id: 'finishes-hair-2',
    title: 'Finalizações',
    category: 'cortes',
    layout: 'finalizations',
    images: [
      { image: client07, alt: 'Finalização de cabelo' },
      { image: client08, alt: 'Finalização de cabelo e barba' },
    ],
  },
  {
    id: 'finishes-hair-beard-1',
    title: 'Finalizações',
    category: ['cortes', 'barba'],
    layout: 'finalizations',
    images: [
      { image: client16, alt: 'Finalização de cabelo e barba' },
      { image: client20, alt: 'Finalização de cabelo e barba' },
    ],
  },
  {
    id: 'finishes-beard-1',
    title: 'Finalizações',
    category: 'barba',
    layout: 'finalizations',
    images: [
      { image: client18, alt: 'Finalização de cabelo e barba' },
      { image: client19, alt: 'Finalização de barba' },
    ],
  },
  {
    id: 'gal-products',
    title: 'Linha de Cuidados Masculinos',
    category: 'produtos',
    image: ceraImg,
    caption: 'Produtos selecionados para o seu cuidado diário.',
  },
];

// Grade visual do Instagram @barbearia.omartins
export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    imageUrl: client07,
    caption: 'O visual que fala por você. Corte alinhado com técnica e personalidade.',
    likes: 'Curtido por dezenas de clientes',
    tag: '#BarbeariaOMartins',
  },
  {
    id: 'insta-2',
    imageUrl: client19,
    caption: 'Barba definida, contornos nítidos e hidratação. Cuidado clássico para o homem moderno.',
    likes: 'Destaque no feed',
    tag: '#BarbaFortaleza',
  },
  {
    id: 'insta-3',
    imageUrl: client17,
    caption: 'Seu ponto de parada no Centro de Fortaleza. Conforto, tradição e atendimento direto.',
    likes: 'Ambiente O Martins',
    tag: '#CentroDeFortaleza',
  },
  {
    id: 'insta-4',
    imageUrl: ceraImg,
    caption: 'Leve a finalização da barbearia para o seu dia a dia. Cera capilar disponível na loja.',
    likes: 'Cuidados Masculinos',
    tag: '#EstiloOMartins',
  },
];
