// Shared site data. House rule: no em dashes.

export const clinic = {
  name: 'Melbourne Vasectomy Centre',
  phoneLabel: '1800 SNIPME',
  phoneDigits: '1800 764 763',
  phoneHref: 'tel:1800764763',
  email: 'info@vasectomyaustralia.com.au',
  facebook: 'https://www.facebook.com/vasectomyaustralia',
  bookingHref:
    'https://bookings.gettimely.com/vasectomyaustralia/bb/book?location=199369&product=2909739:SV',
  address: {
    line1: 'First Floor',
    line2: '54 Commercial Road',
    suburb: 'Prahran',
    state: 'VIC',
    postcode: '3181',
  },
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.9724051577036!2d144.99036447652261!3d-37.837531871969695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61b6da1fbda21%3A0x81d6ef93a9a6a042!2sVasectomy%20Australia%20-%20Melbourne%20Vasectomy%20Centre!5e0!3m2!1sen!2sau!4v1710357559599!5m2!1sen!2sau',
  mapsLink:
    'https://www.google.com/maps/place/Vasectomy+Australia+-+Melbourne+Vasectomy+Centre/@-37.8375319,144.9929394,17z',
};

export const nav = [
  { label: 'The doctors', href: '/about' },
  { label: 'Procedure', href: '/patient-information' },
  { label: 'Fees', href: '/fees' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
];

export const satelliteLocations = [
  {
    name: 'Melbourne Vasectomy Centre',
    address: 'First Floor, 54 Commercial Road, Prahran VIC 3181',
    note: 'Our main clinic, five minutes from the Alfred and a short walk from Prahran station.',
    primary: true,
    image: '/images/gen-clinic-exterior.jpg',
  },
  {
    name: 'Casey Medical Centre',
    address: '1S Morison Road, Clyde VIC 3978',
    note: 'South east growth corridor, convenient for Berwick, Cranbourne and Pakenham.',
    primary: false,
    image: '/images/gen-regional.jpg',
  },
  {
    name: 'Vasectomy Australia Geelong',
    address: '141 High Street, Belmont VIC 3216',
    note: 'For patients across Geelong, the Bellarine and the Surf Coast.',
    primary: false,
    image: '/images/gen-regional.jpg',
  },
  {
    name: 'Carn-Brae Clinic, Ballarat',
    address: '328 Glenelg Hwy, Delacombe VIC 3358',
    note: 'Serving Ballarat and the western district.',
    primary: false,
    image: '/images/gen-regional.jpg',
  },
  {
    name: 'Gladstone Park',
    address: 'Gladstone Park Drive, Gladstone Park VIC 3043',
    note: 'Northern suburbs, close to Tullamarine and Broadmeadows.',
    primary: false,
    image: '/images/gen-regional.jpg',
  },
];

export const feeLines = [
  { label: 'Vasectomy fee', value: '$830', kind: 'add' as const },
  { label: 'Less Medicare rebate', value: '$233', kind: 'less' as const },
];

export const feeTotal = { label: 'Out of pocket cost', value: '$597' };

export const feeNote =
  'A $100 deposit secures your booking, with the $730 balance due on procedure day. We submit your Medicare claim after the procedure, and your $233 rebate lands in your bank account within one to two business days.';

export const medicareClaim = {
  title: 'How to claim your Medicare rebate',
  lede:
    'We submit the Medicare claim on your behalf. If for any reason that cannot be done, you can claim the rebate yourself in any of these ways.',
  methods: [
    {
      label: 'Medicare online account',
      body: 'Upload a copy of your paid invoice to your Medicare online account.',
      href: 'https://www.servicesaustralia.gov.au/individuals/services/medicare/medicare-online-accounts',
    },
    {
      label: 'Express Plus Medicare app',
      body: 'Download the Express Plus Medicare mobile app and process the claim there.',
      href: 'https://www.servicesaustralia.gov.au/individuals/services/medicare/express-plus-medicare-mobile-app',
    },
    {
      label: 'By mail',
      body: 'Complete a Medicare claim form and post it with your invoice.',
      href: 'https://www.servicesaustralia.gov.au/individuals/forms/ms014',
    },
    {
      label: 'In person',
      body: 'Take your invoice into any Services Australia service centre.',
      href: 'https://findus.servicesaustralia.gov.au/',
    },
  ],
  invoiceNote:
    'To claim, you need a copy of your invoice listing the services received and confirming the account is paid in full. Your invoice is emailed within 48 hours of your appointment. If it has not arrived, write to us and we will resend it.',
};
