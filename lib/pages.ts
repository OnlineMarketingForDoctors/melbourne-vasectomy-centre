// Copy for the inner pages, carried over from the live site and restructured.
// House rule: no em dashes.

export const aboutPage = {
  eyebrow: 'About',
  titleLines: ['Two of the most', 'experienced hands', 'in the country'],
  lede:
    'The Melbourne Vasectomy Centre specialises in no scalpel vasectomy at our clinic in Prahran, with Dr Geoff Cashion and Dr Matt Valentine.',
  intro: {
    title: 'A clinic built around one procedure',
    body: [
      'Most doctors perform a handful of vasectomies a year. Ours perform thousands. That is the whole idea behind the Melbourne Vasectomy Centre: a single procedure, done properly, by people who do nothing else.',
      'Both doctors trained in the United States in the no scalpel technique, both use open ended methods to reduce the risk of congestion and post vasectomy pain, and both run their lists so that consultation and procedure can usually happen within 48 hours.',
    ],
  },
  doctors: [
    {
      id: 'cashion',
      name: 'Dr Geoff Cashion',
      role: 'Vasectomy specialist, founder',
      portrait: '/images/geoff-portrait.jpg',
      environmental: '/images/gen-geoff-room.jpg',
      consult: '/images/gen-consult-geoff.jpg',
      feature: '/images/gen-conference.jpg',
      featureCaption: 'Dr Cashion presents regularly at national and international vasectomy conferences.',
      headline: 'Performs more no scalpel vasectomies each year than any other doctor in Australia.',
      bio: [
        'Dr Cashion is a Specialist GP and the founder of Vasectomy Australia, the country’s largest provider of no scalpel vasectomy.',
        'He trained in the United States under one of the world’s leading vasectomists, learning the no scalpel technique in order to offer the best available procedure to men seeking permanent contraception.',
        'He has performed more than 15,000 vasectomies to date, and continues to present at national and international vasectomy conferences as part of a commitment to lifelong learning.',
      ],
      stats: [
        { value: '4,000', label: 'Vasectomies a year' },
        { value: '15,000+', label: 'Performed to date' },
      ],
      facts: [
        'Founder of Vasectomy Australia',
        'Trained in the United States in the no scalpel technique',
        'Presents at national and international vasectomy conferences',
        'Available for 24 hour after care support',
      ],
    },
    {
      id: 'valentine',
      name: 'Dr Matt Valentine',
      role: 'Vasectomy specialist',
      portrait: '/images/matt-portrait.jpg',
      environmental: '/images/gen-matt-room.jpg',
      consult: '/images/gen-consult-matt.jpg',
      feature: '/images/matt-consult.jpg',
      featureCaption: 'Free phone consultations are available before you book.',
      headline: 'A Fellow of the RACGP with a background in military and aviation medicine.',
      bio: [
        'Dr Valentine completed his medical degree at the University of Adelaide in 2000. After a two year internship and residency at the Royal Adelaide Hospital, he spent five years as a full time Medical Officer in the Royal Australian Air Force, including several overseas deployments and the coordination of aeromedical retrievals both in Australia and abroad.',
        'He has been performing vasectomies since 2008, initially trained in the traditional technique by Dr Greg Silver, and later travelling to the United States to specialise in the no scalpel technique.',
        'He is a Fellow of the Royal Australian College of General Practitioners and holds the position of Designated Aviation Medical Examiner with the Civil Aviation Safety Authority.',
      ],
      stats: [
        { value: '17,000+', label: 'Vasectomies performed' },
        { value: '2008', label: 'Performing since' },
      ],
      facts: [
        'Fellow of the Royal Australian College of General Practitioners',
        'Five years as a Medical Officer, Royal Australian Air Force',
        'Designated Aviation Medical Examiner, CASA',
        'Trained in the United States in the no scalpel technique',
      ],
      qualifications: [
        { year: '2000', title: 'Bachelor of Medicine and Bachelor of Surgery' },
        { year: '2003', title: 'Designated Aviation Medical Examiner, CASA' },
        { year: '2006', title: 'Fellowship of the Royal Australian College of General Practitioners' },
      ],
    },
  ],
  approach: {
    title: 'How we work',
    points: [
      {
        title: 'Open ended technique',
        body:
          'We leave the testicular end of the vas open, which reduces congestion and pressure and lowers the risk of post vasectomy pain.',
      },
      {
        title: 'Fascial interposition',
        body:
          'A layer of tissue is placed between the two cut ends of the vas, which makes it far less likely they find each other again.',
      },
      {
        title: 'One access point',
        body:
          'The no scalpel method reaches both sides through a single tiny opening, so there is less bruising, less bleeding and a faster recovery.',
      },
      {
        title: 'Local anaesthetic only',
        body:
          'No sedation, no general anaesthetic, no anaesthetist fee. You walk in, and most men drive themselves home.',
      },
    ],
  },
};

export const patientPage = {
  eyebrow: 'Patient information',
  titleLines: ['What actually', 'happens on', 'the day'],
  lede:
    'Deciding to have a vasectomy can feel daunting, but it need not. Most men tolerate the procedure very well and recover quickly. Here is exactly what to expect.',
  consultation: {
    title: 'Before the procedure',
    kicker: 'Pre-vasectomy consultation',
    image: '/images/gen-consult-geoff.jpg',
    body:
      'Your doctor runs a consultation before the procedure itself. It is short, and there is nothing to prepare for beyond turning up.',
    points: [
      'Confirm your decision to have permanent sterilisation by vasectomy',
      'Go through your medical history, including any medication such as aspirin or warfarin that would mean postponing',
      'Go through the consent form so you understand the risks and potential complications',
      'A brief examination to confirm the vas deferens can be felt',
    ],
    note:
      'If you would like a free phone consultation with your doctor before you book, call the centre and we will arrange one.',
  },
  procedure: {
    title: 'In the procedure room',
    lede: 'The operation itself takes about 15 minutes, start to finish.',
    steps: [
      {
        title: 'Meeting the team',
        body:
          'After your consultation you are taken through to the procedure room, where you meet the nurse assisting your doctor.',
        image: '/images/gen-procedure-room.jpg',
      },
      {
        title: 'Getting comfortable',
        body:
          'You are asked to remove your pants and underwear and make yourself comfortable on the bed with a sheet over you while final preparations are made.',
        image: '/images/gen-waiting-corner.jpg',
      },
      {
        title: 'Cleaning the area',
        body:
          'The area is cleaned with a preparation called chlorhexidine, which reduces the chance of infection.',
        image: '/images/gen-prep-tray.jpg',
      },
      {
        title: 'Local anaesthetic',
        body:
          'A small needle numbs the skin of the scrotum. Most men barely notice it. Further local anaesthetic is then placed around each vas deferens, which can feel a little uncomfortable for a couple of seconds.',
        image: '/images/gen-gloved-hands.jpg',
      },
      {
        title: 'The left side',
        body:
          'The left vas deferens is lifted out and its outer tissue removed. A hyfrecator divides the vas and seals the prostatic end. A tissue layer is placed between the two ends, known as fascial interposition, so they cannot rejoin. The testicular end is left open and returned to the scrotum.',
        image: '/images/gen-instruments.jpg',
      },
      {
        title: 'The right side',
        body: 'The same process is repeated on the right vas, through the same single opening.',
        image: '/images/gen-drape.jpg',
      },
      {
        title: 'Closed and done',
        body:
          'The small wound at the front of the scrotum is closed with steri-strips, and you are free to go. No stitches are needed.',
        image: '/images/gen-dressing.jpg',
      },
    ],
    after:
      'You leave with your post operative instructions, your doctor’s contact details in case of any issues, and the pathology request form for your semen analysis.',
  },
  preparing: {
    title: 'Preparing for your vasectomy',
    image: '/images/gen-pathology.jpg',
    items: [
      {
        when: '7 days before',
        title: 'Stop blood thinners',
        body:
          'Cease any blood thinning medication at least seven days before your procedure. Discuss this with your GP or specialist first, and call us if you are unsure.',
      },
      {
        when: '3 days before',
        title: 'Sign your consent form',
        body:
          'We send an electronic consent form by SMS to your mobile three days before your procedure. Read it and sign it in advance.',
      },
      {
        when: 'The morning of',
        title: 'Shave the area',
        body: 'Shave the scrotum with a razor on the morning of your procedure.',
      },
      {
        when: 'Plan ahead',
        title: 'Sort out work',
        body:
          'If you have a physical job, arrange time off or light duties with no heavy lifting for seven days afterwards.',
      },
    ],
  },
  recovery: {
    title: 'Afterwards',
    image: '/images/gen-recovery.jpg',
    secondaryImage: '/images/gen-back-to-work.jpg',
    body:
      'Some men recover quickly, others take up to two weeks. The average time to feeling back to normal is about seven days. If your job does not involve heavy lifting you can return immediately, and we can write a medical certificate if you need one.',
    markers: [
      { time: 'Day 0', note: 'Procedure, about 15 minutes' },
      { time: 'Day 1', note: 'Rest, no heavy lifting' },
      { time: 'Week 1', note: 'Most men feel back to normal' },
      { time: 'Month 3', note: 'Semen analysis confirms it worked' },
    ],
    warning:
      'A vasectomy does not mean immediate sterilisation. Consider yourself fertile until a semen analysis confirms otherwise, about three months afterwards.',
  },
};

export const locationsPage = {
  eyebrow: 'Locations',
  titleLines: ['Prahran, and', 'four more across', 'Victoria'],
  lede:
    'Our main clinic is on Commercial Road in Prahran. We also run satellite clinics each month which may be closer to home.',
};

export const contactPage = {
  eyebrow: 'Contact',
  titleLines: ['Talk to us', 'before you book'],
  lede:
    'Free phone consultations are available with your doctor before you commit to anything. Call, email, or book online in under two minutes.',
};

export const bookPage = {
  eyebrow: 'Book online',
  titleLines: ['Book in', 'two minutes'],
  lede:
    'Choose a time that suits you at any of our Victorian clinics. Consultation and procedure can usually happen within 48 hours, and a $100 deposit secures the booking.',
};

export const feesPage = {
  eyebrow: 'Fees',
  titleLines: ['One fee.', 'No surprises.'],
  lede:
    'The full cost of a no scalpel vasectomy at the Melbourne Vasectomy Centre, with the Medicare rebate already accounted for.',
};

export const privacyPage = {
  eyebrow: 'Privacy policy',
  titleLines: ['How we handle', 'your information'],
  lede: 'Melbourne Vasectomy Centre is committed to keeping your personal information private and secure.',
};

export const insurance = {
  title: 'What about private health insurance?',
  lede: 'Short version: you will not need it, and you will almost certainly pay less without it.',
  body: [
    'You cannot use private health insurance for a vasectomy with us, because we perform them in medical centres rather than private hospitals. Private health only helps when the procedure is done in a hospital or day surgery by a urologist.',
    'That route usually costs more, not less.',
  ],
  comparison: [
    { label: 'Private health excess', value: '$500 to $1,000' },
    { label: 'Urologist gap fee', value: 'A few hundred to $1,000+' },
    { label: 'Anaesthetist fee and gap', value: 'Most surgeons want you asleep' },
  ],
  punchline:
    'Add those together and you can be $2,000 or more out of pocket, with insurance. With us it is $597, quoted up front, whether you are privately insured or not.',
};
