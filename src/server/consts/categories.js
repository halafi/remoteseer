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
};

export const ALL_CATEGORIES = {
  ...CATEGORIES,
  ...DEV_CATEGORIES,
};

export const CATEGORIES_META = {
  development: {
    link: '/remote-development-jobs/',
    img: '💻',
    title: 'Software Development',
    description:
      'Browse through a listing of remote software development job openings from multiple websites at once.',
  },
  design: {
    link: '/remote-design-jobs/',
    img: '🎨',
    title: 'Design',
    description:
      'Browse through a listing of remote design, user experience and interaction job openings from multiple websites at once.',
  },
  'customer-support': {
    link: '/remote-customer-support-jobs/',
    img: '🧯🔥',
    title: 'Customer Support',
    description:
      'Browse through a listing of remote customer support job openings from multiple websites at once.',
  },
  'sales-and-marketing': {
    link: '/remote-sales-and-marketing-jobs/',
    img: '📈',
    title: 'Sales and Marketing',
    description:
      'Browse through a listing of remote marketing and sales job openings from multiple websites at once.',
  },
  copywriting: {
    link: '/remote-copywriting-jobs/',
    img: '📝',
    title: 'Copywriting',
    description:
      'Browse through a listing of remote copywriting job openings from multiple websites at once.',
  },
};
export const DEV_CATEGORIES_META = {
  mobile: {
    link: '/remote-development-jobs/mobile/',
    img: '📱',
    title: 'Mobile',
    headline: 'Mobile App Development',
    description:
      'Browse through a listing of remote mobile development jobs from multiple websites at once.',
  },
  frontend: {
    link: '/remote-development-jobs/frontend/',
    img: '🎠',
    title: 'Frontend',
    headline: 'Frontend Development',
    description:
      'Browse through a listing of remote frontend development jobs from multiple websites at once.',
  },
  backend: {
    link: '/remote-development-jobs/backend/',
    img: '⚙️',
    title: 'Backend',
    headline: 'Backend Development',
    description:
      'Browse through a listing of remote backend development jobs from multiple websites at once.',
  },
  'full-stack': {
    link: '/remote-development-jobs/full-stack/',
    img: '🎰',
    title: 'Full Stack',
    headline: 'Full Stack Development',
    description:
      'Browse through a listing of remote full stack jobs from multiple websites at once.',
  },
  devops: {
    link: '/remote-development-jobs/devops/',
    img: '⚰️',
    title: 'DevOps',
    description: 'Browse through a listing of remote devops jobs from multiple websites at once.',
  },
  games: {
    link: '/remote-development-jobs/games/',
    img: '🎮',
    title: 'Games',
    headline: 'Game Development',
    description:
      'Browse through a listing of remote game development jobs from multiple websites at once.',
  },
  blockchain: {
    link: '/remote-development-jobs/blockchain/',
    img: '⛓️',
    title: 'Blockchain',
    headline: 'Blockchain Development',
    description:
      'Browse through a listing of remote blockchain development jobs from multiple websites at once.',
  },
};
