// @flow

export const CATEGORIES = {
  development: ['dev'],
  design: ['design'],
  'customer-support': ['customer support'],
  'sales-and-marketing': ['marketing', 'sales and marketing', 'sales'],
  copywriting: ['copywriting'],
};

export const DEV_CATEGORIES = {
  mobile: ['mobile'],
  frontend: ['frontend'],
  backend: ['backend'],
  'full-stack': ['fullstack', 'full stack'],
  devops: ['devops'],
  blockchain: ['blockchain', 'cryptocurrency'],
  games: ['game dev'],
  javascript: ['javascript'],
  web: ['web dev'],
  nodejs: ['nodejs'],
};

export const FRONTEND_CATEGORIES = {
  react: ['react'],
  angular: ['angular'],
  vue: ['vuejs'],
};

export const ALL_CATEGORIES = {
  ...CATEGORIES,
  ...DEV_CATEGORIES,
  ...FRONTEND_CATEGORIES,
};

export const CATEGORIES_META = {
  development: {
    link: '/remote-development-jobs/',
    img: '💻',
    title: 'Software Development',
    description:
      'Find all the latest remote jobs in programming and software development available on multiple websites in one place.',
  },
  design: {
    link: '/remote-design-jobs/',
    img: '🎨',
    title: 'Design',
    description:
      'Find all the latest remote jobs in design, user experience (UX) and user interaction (UI) available on multiple websites in one place.',
  },
  'customer-support': {
    link: '/remote-customer-support-jobs/',
    img: '🧯🔥',
    title: 'Customer Support',
    description:
      'Find all the latest remote customer support jobs available on multiple websites in one place.',
  },
  'sales-and-marketing': {
    link: '/remote-sales-and-marketing-jobs/',
    img: '📈',
    title: 'Sales and Marketing',
    description:
      'Find all the latest remote jobs in marketing and sales available on multiple websites in one place.',
  },
  copywriting: {
    link: '/remote-copywriting-jobs/',
    img: '📝',
    title: 'Copywriting',
    description:
      'Find all the latest remote jobs in copywriting, copyediting and content writing available on multiple websites in one place.',
  },
};
export const DEV_CATEGORIES_META = {
  mobile: {
    link: '/remote-development-jobs/mobile/',
    img: '📱',
    title: 'Mobile',
    headline: 'Mobile App Development',
    description:
      'Find all the latest remote jobs in mobile app development (Android, iOS, multi platform) on multiple websites in one place.',
  },
  frontend: {
    link: '/remote-development-jobs/frontend/',
    img: '🎠',
    title: 'Frontend',
    headline: 'Frontend Development',
    description:
      'Find all the latest remote jobs in frontend development on multiple websites in one place. Build web apps remotely.',
  },
  backend: {
    link: '/remote-development-jobs/backend/',
    img: '⚙️',
    title: 'Backend',
    headline: 'Backend Development',
    description:
      'Find all the latest backend development remote jobs on multiple websites in one place.',
  },
  'full-stack': {
    link: '/remote-development-jobs/full-stack/',
    img: '🎰',
    title: 'Full Stack',
    headline: 'Full Stack Development',
    description:
      'Find all the latest full stack development remote jobs on multiple websites in one place. Work on both backend and frontend.',
  },
  devops: {
    link: '/remote-development-jobs/devops/',
    img: '⚰️',
    title: 'DevOps',
    description: 'Find all the latest remote devops jobs on multiple websites in one place.',
  },
  games: {
    link: '/remote-development-jobs/games/',
    img: '🎮',
    title: 'Games',
    headline: 'Game Development',
    description:
      'Find all the latest remote gamedev jobs on multiple websites in one place. Start programming games remotely.',
  },
  blockchain: {
    link: '/remote-development-jobs/blockchain/',
    img: '⛓️',
    title: 'Blockchain',
    headline: 'Blockchain Development',
    description:
      'Find all the latest remote blockchain development jobs on multiple websites in one place. Work on modern crypto projects.',
  },
  javascript: {
    link: '/remote-development-jobs/javascript/',
    title: 'JavaScript',
    headline: 'JavaScript Development',
    description:
      'Find all the latest remote JavaScript jobs on multiple websites in one place. Build scalable web sites and apps in JavaScript.',
  },
  web: {
    link: '/remote-development-jobs/web/',
    title: 'Web',
    headline: 'Web Development',
    description:
      'Find all the latest remote web development jobs on multiple websites in one place.',
  },
  nodejs: {
    link: '/remote-development-jobs/nodejs/',
    title: 'Node JS',
    headline: 'Node JS Development',
    description:
      'Find all the latest remote Node JS development jobs on multiple websites in one place. Build backend in JavaScript.',
  },
};
export const FRONTEND_CATEGORIES_META = {
  react: {
    link: '/remote-development-jobs/frontend/react/',
    title: 'React',
    headline: 'React Development',
    description:
      'Find all the latest remote React development jobs on multiple websites in one place. Build scalable web apps in React JS.',
  },
  angular: {
    link: '/remote-development-jobs/frontend/angular/',
    title: 'Angular',
    headline: 'Angular Development',
    description:
      'Find all the latest remote Angular development jobs on multiple websites in one place. Build scalable web apps in Angular JS.',
  },
  vue: {
    link: '/remote-development-jobs/frontend/vue/',
    title: 'Vue JS',
    headline: 'Vue Development',
    description:
      'Find all the latest remote Vue development jobs on multiple websites in one place. Build scalable web apps in Vue JS.',
  },
};
export const ALL_META = { ...CATEGORIES_META, ...DEV_CATEGORIES_META, ...FRONTEND_CATEGORIES_META };
