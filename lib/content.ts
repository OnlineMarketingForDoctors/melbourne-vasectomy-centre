// All homepage copy lives here so it can be reviewed and edited in one place.
// House rule: no em dashes anywhere in this file.

export { clinic, nav } from './site';

export const hero = {
  eyebrow: 'No scalpel vasectomy, Melbourne',
  titleLines: ['Permanent.', 'Safe.', 'Sorted in', '15 minutes.'],
  lede:
    'A no scalpel vasectomy under local anaesthetic, performed by two of the most experienced vasectomists in Australia. Most men are back to normal within a week.',
  primaryCta: 'Book online',
  secondaryCta: 'Meet the doctors',
  priceNote: '$597 out of pocket after the Medicare rebate',
};

// The ledger band. Every figure here is traceable to a published source.
export const ledger = [
  {
    value: 5000,
    suffix: '+',
    label: 'Vasectomies a year',
    note: 'Between our two doctors',
  },
  {
    value: 15000,
    suffix: '+',
    label: 'Performed by Dr Cashion',
    note: 'Across his career to date',
  },
  {
    value: 99,
    suffix: '%',
    label: 'Success rate',
    note: 'Greater than 99% effective',
  },
  {
    value: 182,
    suffix: '',
    label: 'Google reviews',
    note: 'Rated excellent',
  },
];

export const doctors = [
  {
    id: 'cashion',
    name: 'Dr Geoff Cashion',
    role: 'Vasectomy specialist, founder',
    portrait: '/images/geoff-grey.jpg',
    environmental: '/images/gen-geoff-room.jpg',
    stat: { value: '4,000', unit: 'a year' },
    claim: 'Performs more no scalpel vasectomies each year than any other doctor in Australia.',
    bio: [
      'Dr Cashion is a Specialist GP and the founder of Vasectomy Australia, the country’s largest provider of no scalpel vasectomy.',
      'He trained in the United States under one of the world’s leading vasectomists, learning the no scalpel technique to offer the best possible procedure for men seeking permanent contraception.',
      'He regularly presents at national and international vasectomy conferences, and has performed more than 15,000 procedures to date.',
    ],
    facts: [
      'Over 15,000 vasectomies performed',
      'Trained in the United States in the no scalpel technique',
      'Presents at national and international vasectomy conferences',
    ],
  },
  {
    id: 'valentine',
    name: 'Dr Matt Valentine',
    role: 'Vasectomy specialist',
    portrait: '/images/matt-portrait.jpg',
    environmental: '/images/gen-matt-room.jpg',
    stat: { value: '17,000', unit: 'performed' },
    claim: 'One of Australia’s foremost vasectomists, with a background in military and aviation medicine.',
    bio: [
      'Dr Valentine completed his medical degree at the University of Adelaide in 2000. After a two year internship and residency at the Royal Adelaide Hospital, he spent five years as a full time Medical Officer in the Royal Australian Air Force.',
      'In 2016 he travelled to the United States to train in the no scalpel vasectomy technique, and now performs upwards of 1,000 vasectomies a year.',
      'He uses gentle techniques that allow a fast recovery with minimal downtime.',
    ],
    facts: [
      'Over 17,000 vasectomies performed',
      'Upwards of 1,000 a year, performing since 2008',
      'Five years as a Medical Officer, Royal Australian Air Force',
      'Trained in the United States in the no scalpel technique',
    ],
  },
];

export const pillars = [
  {
    key: 'safe',
    title: 'Safe',
    image: '/images/gen-gloved-hands.jpg',
    body:
      'Every vasectomy at the Melbourne Vasectomy Centre is performed under local anaesthetic. Most procedures take less than 15 minutes, and the no scalpel technique means a quicker recovery, so you can get back to your usual activities, usually within 7 days.',
    figure: '15 min',
    figureLabel: 'Typical procedure time',
  },
  {
    key: 'effective',
    title: 'Effective',
    image: '/images/gen-instruments.jpg',
    body:
      'A no scalpel vasectomy at the Melbourne Vasectomy Centre has a greater than 99% success rate. We confirm it worked with a semen analysis about three months afterwards, so you are never left guessing.',
    figure: '99%+',
    figureLabel: 'Success rate',
  },
  {
    key: 'affordable',
    title: 'Affordable',
    image: '/images/gen-reception.jpg',
    body:
      'We offer one of the most affordable vasectomies on the market, with a low out of pocket expense and no hidden extras. One fee, quoted up front, so you know exactly what you will pay.',
    figure: '$597',
    figureLabel: 'Out of pocket',
  },
];

export const whyChoose = {
  title: 'Why men choose the Melbourne Vasectomy Centre',
  lede:
    'Two specialist vasectomists, one straightforward procedure, and a clinic set up entirely around getting you in, done and home.',
  points: [
    'Affordable, clearly quoted price',
    '24 hour after care support',
    'No scalpel and open ended techniques',
    'Multiple locations close to patients across Australia',
    'Consultation and procedure within 48 hours',
    'Free phone consultation with your doctor',
    'Online bookings available',
  ],
};

export const procedure = {
  title: 'How it works',
  lede:
    'The operation takes about 15 minutes. Here is exactly what happens, step by step, so nothing on the day is a surprise.',
  steps: [
    {
      title: 'Local anaesthetic',
      body:
        'A local anaesthetic is injected into the area using a fine needle. It feels no worse than a flu injection or a dentist’s needle.',
    },
    {
      title: 'A single tiny opening',
      body: 'A tiny hole is made in the scrotum. No scalpel is used, and no incision is cut.',
    },
    {
      title: 'The vas is divided',
      body:
        'The vas deferens is divided and the testicular end of the tube is left open. This helps prevent congestion in the testis and reduces the risk of pain or post vasectomy syndrome.',
    },
    {
      title: 'A tissue barrier',
      body: 'A tiny layer of tissue is placed between the two ends of the vas to stop them rejoining.',
    },
    {
      title: 'The other side',
      body: 'The same procedure is performed on the other side, through the same single opening.',
    },
    {
      title: 'Closed without stitches',
      body: 'The skin edge is clipped together without stitches.',
    },
    {
      title: 'Dressing applied',
      body: 'A dressing is applied and you are on your way. Most men drive themselves home or take a short trip by cab.',
    },
  ],
};

export const recovery = {
  title: 'Then you go home',
  image: '/images/gen-recovery.jpg',
  secondaryImage: '/images/gen-back-to-work.jpg',
  body:
    'Some men recover quickly, others take up to two weeks. The average time to feeling back to normal is about seven days. If your job does not involve heavy lifting you can return to work immediately, and we can write a medical certificate if you need one.',
  markers: [
    { time: 'Day 0', note: 'Procedure, about 15 minutes' },
    { time: 'Day 1', note: 'Rest up, take it easy' },
    { time: 'Week 1', note: 'Most men feel back to normal' },
    { time: 'Month 3', note: 'Semen analysis confirms it worked' },
  ],
};

export const fees = {
  title: 'One fee, no surprises',
  lede: 'The cost of a no scalpel vasectomy at the Melbourne Vasectomy Centre.',
  lines: [
    { label: 'Vasectomy fee', value: '$830', kind: 'add' as const },
    { label: 'Less Medicare rebate', value: '$233', kind: 'less' as const },
  ],
  total: { label: 'Out of pocket cost', value: '$597' },
  note:
    'A $100 deposit secures your booking, with the $730 balance due on procedure day. We submit your Medicare claim after the procedure, and your $233 rebate lands in your bank account within one to two business days.',
  policyLabel: 'Read our cancellation policy',
  policyHref: '#cancellation',
};

export const reviewsMeta = {
  rating: 'Excellent',
  count: 182,
  source: 'Google',
};

export const reviews = [
  {
    name: 'Ian Kim',
    body: 'Very satisfying with the relaxed atmosphere and short surgery time. Would recommend.',
  },
  {
    name: 'P LW',
    body:
      'I was quite worried about this procedure but it was honestly nothing to worry about. Marcel is a great guy and it was pretty painless and over in no time. I could work straight afterwards no worries at all. Thank you very much!',
  },
  {
    name: 'Adam Todorov',
    body:
      'Highly recommend Marcel and the team. They are very professional and the procedure was undertaken very quickly with no pain or discomfort during and afterwards. Many thanks Marcel.',
  },
  {
    name: 'Brad L',
    body: 'Super friendly, easy quick no pain makes you feel comfortable',
  },
  {
    name: 'Chris Williams',
    body:
      'The whole process could not have been better in my case. Dr Marcel and Grace did an amazing job. The video I watched prior was very informative and what was discussed happened in the clinic so could not have been more happier.',
  },
  {
    name: 'Simon Herod',
    body: 'Great service, quick painless and Marcel and Amy were very friendly.',
  },
  {
    name: 'Fraser Mackie',
    body:
      'Amazingly professional, respectful, efficient and kind. I cannot recommend Vasectomy Australia enough! As a professional NDIS support worker I know the value of preserving a client’s dignity.',
  },
  {
    name: 'Gustavo K.',
    body:
      'Just came out of the procedure, was very quick and easy. Mainly painless, apart from a little pressure at the beginning. Dr Marcel and Amy were very nice and helpful.',
  },
  {
    name: 'Johnny Balazo',
    body:
      'Really great team here. Procedure was over before I knew it. Enjoyed the chat while the operation was happening. Recovery is already going great.',
  },
];

export const faqs = [
  {
    q: 'What is a vasectomy?',
    a: 'A vasectomy is a simple procedure where the vas deferens is cut to cause sterilisation in a male. The vas is a tube that carries sperm from the testicles, where it is made, to the penis. On the way, sperm is joined by semen, so your ejaculate contains both. Sperm makes up a very small percentage, less than 5%. Because we are only stopping sperm, most men will not notice any change in the volume of their ejaculate after a vasectomy.',
  },
  {
    q: 'How long does the procedure take?',
    a: 'A vasectomy takes between 15 and 20 minutes, depending on the procedure.',
  },
  {
    q: 'What are the types of vasectomy?',
    a: 'There are two ways to categorise a vasectomy. Traditional or no scalpel: the traditional method uses a scalpel to make an incision on each side of the scrotum to access the vas. The no scalpel technique involves only one access hole, via blunt dissection, to reach the vas from both sides. It carries less chance of complications like bruising and bleeding, and offers a quicker recovery. Open ended or closed ended: an open ended vasectomy leaves the vas attached to the testis open, allowing sperm release into the scrotum, which reduces congestion and pressure. A closed ended vasectomy clamps the testicular end of the vas with a clip or suture.',
  },
  {
    q: 'Can I drive home after my vasectomy?',
    a: 'We recommend someone drives you home by private vehicle or cab. Public transport is also fine. If that is not possible, wait at least 20 minutes after leaving the procedure room and make sure you feel completely fine before driving. If you feel lightheaded while driving, pull over immediately.',
  },
  {
    q: 'Can I have my procedure done under sedation or a general anaesthetic?',
    a: 'We only offer local anaesthetic for our vasectomy procedure. A urologist can give a referral if you prefer sedation or general anaesthetic options.',
  },
  {
    q: 'Can I get my vasectomy reversed?',
    a: 'Yes, a vasectomy can be reversed, however the process is costly and not covered by Medicare. If you are asking this question, you may need more time before deciding on permanent contraception.',
  },
  {
    q: 'What are the risks of having a vasectomy?',
    a: 'All surgical procedures carry some risk, and we do everything we can to reduce the rate of complications. Common symptoms include bruising in the days following your vasectomy, which should fade after a week or so, and mild pain and swelling that should settle within a few days. Less common complications include scrotal haematoma, a large bruise within the scrotum, which can be significantly reduced by following recovery instructions about lifting heavy objects. Infection is uncommon, usually mild, and treated with oral antibiotics. Post vasectomy pain syndrome can arise at any time after the procedure with no agreed cause. Pain often reduces naturally, but in rare cases a specialist may need to perform additional surgery. All risks are outlined in your consent form.',
  },
  {
    q: 'How and when do I know the procedure worked?',
    a: 'A vasectomy procedure does not mean immediate sterilisation. You must consider yourself fertile until you are informed the vasectomy was a success and a semen analysis has been performed. The semen analysis is done approximately three months after the procedure, to ensure all residual sperm has cleared.',
  },
  {
    q: 'When can I go back to work?',
    a: 'It depends on whether your job involves heavy lifting. If it does not, you can return immediately. If it does, you may need to take some time off or request light duties for the first week. A medical certificate can be written if required.',
  },
  {
    q: 'When can I start having sex again?',
    a: 'Generally you can resume sexual activity after a week, but you must consider yourself fertile until notified otherwise.',
  },
  {
    q: 'Do I need a GP referral?',
    a: 'A GP referral is not necessary.',
  },
  {
    q: 'How many days does it take to recover?',
    a: 'Some men recover quite quickly from a vasectomy while others may take up to two weeks. The average time to feeling back to normal is about seven days.',
  },
  {
    q: 'Do you do the laser vasectomy?',
    a: 'Technically, laser vasectomy does not exist. Some vasectomists use a hyfrecator to cut the vas, which may cause confusion, but it is not a laser vasectomy.',
  },
  {
    q: 'Can I use my private health insurance for my vasectomy?',
    a: 'You will not be able to use private health insurance with us, because we perform vasectomies in medical centres rather than in a private hospital. Private health insurance is only of benefit when the procedure is performed in a hospital or day surgery by a urologist. The good news is that it will almost certainly work out more affordable with us. Private health usually requires an excess, which might be $500 or even $1,000. A urologist will almost certainly have a gap on their fee, ranging from a few hundred dollars to over $1,000. Nearly all surgeons will want you asleep, which means an anaesthetic fee and another gap. Once you add those together you may end up $2,000 or more out of pocket, with insurance. With us you know exactly what your fee will be: $597 out of pocket, with no ifs, ands or maybes.',
  },
];

export const closing = {
  title: 'Ready when you are',
  body:
    'Book online in under two minutes, or call and speak to us first. Consultation and procedure can usually happen within 48 hours.',
  primaryCta: 'Book online',
  secondaryCta: 'Have a question?',
};
