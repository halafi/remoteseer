// @flow

export const CATEGORIES = {
  development: ['dev'],
  design: ['design'],
  'customer-support': ['customer support'],
  'sales-and-marketing': ['marketing', 'sales and marketing', 'sales'],
  copywriting: ['copywriting'],
  'human-resources': ['human resources', 'hr'],
  lead: ['lead'],
  exec: ['exec'],
  manager: ['manager'],
  healthcare: ['healthcare'],
  accounting: ['accounting'],
  'data-science': ['data science'],
  'online-teaching': ['online teaching'],
  'virtual-assistant': ['virtual assistant'],
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
  cryptocurrency: ['cryptocurrency'],
  cryptography: ['cryptography'],
  'desktop-apps': ['desktop apps'],
  testing: ['testing'],
  'quality-assurance': ['qa'],
  'project-management': ['project management'],
  'product-management': ['product management'],
  cloud: ['cloud'],
  security: ['security'],
  seo: ['seo'],
  sales: ['sales'],
  marketing: ['marketing'],
  'online-editing': ['online editing'],
  windows: ['windows'],
  linux: ['linux'],
  macosx: ['osx'],
  'big-data': ['big data'],
  sap: ['sap'],
};

export const SUBSUBCATEGORIES = {
  react: ['react'],
  angular: ['angular'],
  vue: ['vuejs'],
  php: ['php'],
  scala: ['scala'],
  ruby: ['ruby'],
  java: ['java'],
  'c++': ['c++'],
  go: ['golang'],
  python: ['python'],
  ios: ['ios'],
  android: ['android'],
  django: ['django'],
  'ruby-on-rails': ['rails'],
  'cross-platform': ['cross platform'],
  nodejs: ['nodejs'],
  cypress: ['cypress'],
  'c-sharp': ['c#'],
  dotnet: ['.net'],
  cms: ['cms'],
  graphql: ['graphql'],
  docker: ['docker'],
  kubernetes: ['kubernetes'],
  jenkins: ['jenkins'],
  rancher: ['rancher'],
  erlang: ['erlang'],
  aws: ['aws'],
  compilers: ['compilers'],
  spark: ['spark'],
  flink: ['flink'],
  // firebase: ['firebase'],
  r: ['r'],

  // flutter: ['flutter'],
  // kotlin: ['kotlin'],
};

export const ALL_CATEGORIES = {
  ...CATEGORIES,
  ...DEV_CATEGORIES,
  ...SUBSUBCATEGORIES,
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
  'human-resources': {
    link: '/remote-human-resources-jobs/',
    img: '💁',
    title: 'Human Resources',
    description:
      'Find all the latest remote HR jobs and remote recruiter jobs available on multiple websites in one place.',
  },
  lead: {
    link: '/remote-lead-jobs/',
    title: 'Lead',
    headline: 'Leadership',
    description:
      'Find the latest remote team lead jobs on multiple websites. Work as a team lead remotely.',
  },
  exec: {
    link: '/remote-exec-jobs/',
    title: 'Executive',
    headline: 'Executive',
    description:
      'Find the latest remote executive jobs on multiple websites. Browse remote executive or director jobs.',
  },
  manager: {
    link: '/remote-manager-jobs/',
    title: 'Manager',
    headline: 'Manager',
    description:
      'Find the latest remote manager jobs on multiple websites. Browse remote positions in management.',
  },
  healthcare: {
    link: '/remote-healthcare-jobs/',
    title: 'Healthcare',
    headline: 'Healthcare',
    description:
      'Find the latest remote jobs in healthcare on multiple websites. Browse remote positions in health care.',
  },
  accounting: {
    link: '/remote-accounting-jobs/',
    title: 'Accounting',
    headline: 'Accounting',
    description:
      'Find the latest remote jobs in accounting on multiple websites. Browse remote accounting and finance jobs.',
  },
  'data-science': {
    link: '/remote-data-science-jobs/',
    title: 'Data Science',
    headline: 'Data Science',
    description:
      'Find the latest remote Data Science jobs on multiple websites. Work as a data scientist remotely.',
  },
  'online-teaching': {
    link: '/remote-online-teaching-jobs/',
    title: 'Online Teaching',
    headline: 'Online Teaching',
    description:
      'Find the latest remote online teaching jobs on multiple websites. Work as an online teacher and teach remotely.',
  },
  'virtual-assistant': {
    link: '/remote-virtual-assistant-jobs/',
    title: 'Virtual Assistant',
    headline: 'Virtual Assistant',
    description:
      'Find the latest remote virtual assistant jobs on multiple websites. Work in administration remotely.',
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
  cryptocurrency: {
    link: '/remote-development-jobs/cryptocurrency/',
    title: 'Cryptocurrency',
    headline: 'Cryptocurrency Development',
    description:
      'Find all the latest remote cryptocurrency development jobs on multiple websites in one place. Work on modern crypto projects.',
  },
  cryptography: {
    link: '/remote-development-jobs/cryptography/',
    title: 'Cryptography',
    headline: 'Cryptography',
    description:
      'Find all the latest remote Cryptography jobs on multiple websites in one place. Remote cryptography engineering positions.',
  },
  'desktop-apps': {
    link: '/remote-development-jobs/desktop-apps/',
    title: 'Desktop',
    headline: 'Desktop Apps',
    description:
      'Find all the latest remote Desktop App developer jobs on multiple websites in one place.',
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
  testing: {
    link: '/remote-development-jobs/testing/',
    title: 'Testing',
    headline: 'Testing',
    description:
      'Find all the latest remote testing jobs on multiple websites in one place. Browse remote tester and automation engineer jobs.',
  },
  'quality-assurance': {
    link: '/remote-development-jobs/quality-assurance/',
    title: 'Quality Assurance',
    headline: 'Quality Assurance',
    description:
      'Find all the latest remote QA jobs on multiple websites in one place. Browse remote quality assurance, QA engineering and testing jobs.',
  },
  'project-management': {
    link: '/remote-development-jobs/project-management/',
    title: 'Project Management',
    headline: 'Project Management',
    description:
      'Find all the latest remote project manager jobs on multiple websites in one place. Work in project management remotely.',
  },
  'product-management': {
    link: '/remote-development-jobs/product-management/',
    title: 'Product Management',
    headline: 'Product Management',
    description:
      'Find all the latest remote product manager jobs on multiple websites in one place. Work in product management remotely.',
  },
  seo: {
    link: '/remote-sales-and-marketing-jobs/seo/',
    title: 'Search Engine Optimization',
    headline: 'SEO',
    description:
      'Find all the latest remote SEO jobs on multiple websites in one place. Work remotely in content marketing as SEO manager.',
  },
  linux: {
    link: '/remote-development-jobs/linux/',
    title: 'Linux',
    headline: 'Linux Administration & Development',
    description:
      'Find all the latest remote Linux admin and dev jobs on multiple websites in one place.',
  },
  macosx: {
    link: '/remote-development-jobs/macosx/',
    title: 'OSX',
    headline: 'Mac OSX Development',
    description:
      'Find all the latest remote MAC OSX developer jobs on multiple websites in one place.',
  },
  windows: {
    link: '/remote-development-jobs/windows/',
    title: 'Windows',
    headline: 'Windows Administration & Development',
    description:
      'Find all the latest remote Windows admin and dev jobs on multiple websites in one place.',
  },
  'big-data': {
    link: '/remote-development-jobs/big-data/',
    title: 'Big Data',
    headline: 'Big Data',
    description: 'Find all the latest remote Big Data jobs on multiple websites in one place.',
  },
  sap: {
    link: '/remote-development-jobs/sap/',
    title: 'SAP',
    headline: 'SAP',
    description:
      'Find all the latest remote SAP jobs on multiple websites in one place. SAP ERP jobs with remote.',
  },
  sales: {
    link: '/remote-sales-and-marketing-jobs/sales/',
    title: 'Sales',
    headline: 'Sales',
    description:
      'Find all the latest remote jobs in sales on multiple websites in one place. Start doing professional sales remotely.',
  },
  marketing: {
    link: '/remote-sales-and-marketing-jobs/marketing/',
    title: 'Marketing',
    headline: 'Marketing',
    description:
      'Find all the latest remote jobs in marketing on multiple websites in one place. Work remotely in marketing.',
  },
  cloud: {
    link: '/remote-development-jobs/cloud/',
    title: 'Cloud',
    headline: 'Cloud',
    description:
      'Find the latest remote Cloud jobs on multiple websites. Work as cloud software engineer remotely.',
  },
  security: {
    link: '/remote-development-jobs/security/',
    title: 'Security',
    headline: 'Security',
    description:
      'Find the latest remote Security jobs on multiple websites. Work as security engineer remotely.',
  },
  'online-editing': {
    link: '/remote-copywriting-jobs/online-editing/',
    title: 'Online Editing',
    headline: 'Online Editing',
    description:
      'Find all the latest remote jobs in online editing (copyediting) available on multiple websites in one place.',
  },
};
export const SUBSUBCATEGORIES_META = {
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
  php: {
    link: '/remote-development-jobs/backend/php/',
    title: 'PHP',
    headline: 'PHP Development',
    description:
      'Find all the latest remote PHP development jobs on multiple websites in one place.',
  },
  scala: {
    link: '/remote-development-jobs/backend/scala/',
    title: 'Scala',
    headline: 'Scala Development',
    description:
      'Find all the latest remote Scala development jobs on multiple websites in one place.',
  },
  r: {
    link: '/remote-development-jobs/backend/r/',
    title: 'R',
    headline: 'R Development',
    description: 'Find all the latest remote R development jobs on multiple websites in one place.',
  },
  nodejs: {
    link: '/remote-development-jobs/backend/nodejs/',
    title: 'Node JS',
    headline: 'Node JS Development',
    description:
      'Find all the latest remote Node JS development jobs on multiple websites in one place. Build backend in JavaScript.',
  },
  ruby: {
    link: '/remote-development-jobs/backend/ruby/',
    title: 'Ruby',
    headline: 'Ruby Development',
    description:
      'Find all the latest remote Ruby development jobs on multiple websites in one place. Full stack Ruby on Rails and backend focused remote jobs.',
  },
  erlang: {
    link: '/remote-development-jobs/backend/erlang/',
    title: 'Erlang',
    headline: 'Erlang Development',
    description:
      'Find all the latest remote Erlang development jobs on multiple websites in one place.',
  },
  java: {
    link: '/remote-development-jobs/backend/java/',
    title: 'Java',
    headline: 'Java Development',
    description:
      'Find all the latest remote Java development jobs on multiple websites in one place.',
  },
  'c++': {
    link: '/remote-development-jobs/backend/c++/',
    title: 'C++',
    headline: 'C++ Development',
    description:
      'Find all the latest remote C++ development jobs on multiple websites in one place. Start coding in C plus plus remotely.',
  },
  go: {
    link: '/remote-development-jobs/backend/go/',
    title: 'Go',
    headline: 'Go Development',
    description:
      'Find all the latest remote Go development jobs on multiple websites in one place. Start coding in Golang remotely.',
  },
  python: {
    link: '/remote-development-jobs/backend/python/',
    title: 'Python',
    headline: 'Python Development',
    description:
      'Find all the latest remote Python development jobs on multiple websites in one place. Start coding in Python remotely.',
  },
  'c-sharp': {
    link: '/remote-development-jobs/backend/c-sharp/',
    title: 'C#',
    headline: 'C# Development',
    description:
      'Find all the latest remote C# development jobs on multiple websites in one place. Start coding in C# remotely.',
  },
  dotnet: {
    link: '/remote-development-jobs/full-stack/dotnet/',
    title: '.NET',
    headline: '.NET Development',
    description:
      'Find all the latest remote .NET development jobs on multiple websites in one place. Start programming in C# and .NET remotely.',
  },
  graphql: {
    link: '/remote-development-jobs/full-stack/graphql/',
    title: 'GraphQL',
    headline: 'GraphQL',
    description:
      'Find all the latest remote developer jobs using GraphQL on multiple websites in one place. Work with companies using GraphQL remotely.',
  },
  ios: {
    link: '/remote-development-jobs/mobile/ios/',
    title: 'iOS',
    headline: 'iOS Development',
    description:
      'Find all the latest remote iOS app development jobs on multiple websites in one place. Start coding in iOS (Swift) remotely.',
  },
  android: {
    link: '/remote-development-jobs/mobile/android/',
    title: 'Android',
    headline: 'Android Development',
    description:
      'Find all the latest remote Android app development jobs on multiple websites in one place. Start coding in Android (Java, Kotlin) remotely.',
  },
  'cross-platform': {
    link: '/remote-development-jobs/mobile/cross-platform/',
    title: 'Cross Platform',
    headline: 'Cross Platform Mobile App Development',
    description:
      'Find the latest remote mobile cross platform (multiplatform) jobs on multiple websites. Build mobile apps with React Native, Flutter, Ionic, Xamarin.',
  },
  django: {
    link: '/remote-development-jobs/full-stack/django/',
    title: 'Django',
    headline: 'Django Development',
    description:
      'Find the latest remote Django developer jobs on multiple websites. Build full stack applications remotely with Django and Python.',
  },
  cms: {
    link: '/remote-development-jobs/web/cms/',
    title: 'CMS',
    headline: 'CMS',
    description:
      'Find the latest remote CMS developer jobs on multiple websites. Work as remote content management system developer.',
  }, // firebase: { //   link: '/remote-development-jobs/web/firebase/', //   title: 'Firebase', //   headline: 'Firebase', //   description: //     'Find the latest remote Firebase web developer jobs on multiple websites. Develop web applications with Firebase.', // },
  'ruby-on-rails': {
    link: '/remote-development-jobs/full-stack/ruby-on-rails/',
    title: 'Rails',
    headline: 'Ruby on Rails Development',
    description:
      'Find the latest remote Ruby on Rails developer jobs on multiple websites. Build full stack applications remotely with Ruby.',
  }, // kotlin: { //   link: '/remote-development-jobs/mobile/kotlin/', //   title: 'Kotlin', //   headline: 'Kotlin Development', //   description: //     'Find all the latest remote Android Kotlin developer jobs on multiple websites in one place. Start coding in Kotlin remotely.', // }, // flutter: { //   link: '/remote-development-jobs/mobile/flutter/', //   title: 'Flutter', //   headline: 'Flutter Development', //   description: //     'Find the latest remote Flutter developer jobs on multiple websites. Build mobile cross platform applications remotely with Flutter.', // },
  docker: {
    link: '/remote-development-jobs/devops/docker/',
    title: 'Docker',
    headline: 'Docker',
    description:
      'Find the latest remote docker jobs on multiple websites. Work as devops engineer with Docker remotely.',
  },
  rancher: {
    link: '/remote-development-jobs/devops/rancher/',
    title: 'Rancher',
    headline: 'Rancher',
    description:
      'Find the latest remote rancher jobs on multiple websites. Work as devops engineer with Rancher remotely.',
  },
  kubernetes: {
    link: '/remote-development-jobs/devops/kubernetes/',
    title: 'Kubernetes',
    headline: 'Kubernetes',
    description:
      'Find the latest remote Kubernetes jobs on multiple websites. Work as devops engineeer with Kubernetes remotely.',
  },
  jenkins: {
    link: '/remote-development-jobs/devops/jenkins/',
    title: 'Jenkins',
    headline: 'Jenkins',
    description:
      'Find the latest remote Jenkins jobs on multiple websites. Work as devops engineeer with Jenkins remotely.',
  },
  aws: {
    link: '/remote-development-jobs/devops/aws/',
    title: 'AWS',
    headline: 'Amazon Web Services',
    description:
      'Find the latest remote AWS jobs on multiple websites. Work as devops engineeer at companies using AWS remotely.',
  },
  compilers: {
    link: '/remote-development-jobs/backend/compilers/',
    title: 'Compilers',
    headline: 'Compiler Development',
    description:
      'Find the latest remote compiler jobs on multiple websites. Work as a compiler engineer remotely.',
  },
  cypress: {
    link: '/remote-development-jobs/testing/cypress/',
    title: 'Cypress',
    headline: 'Cypress',
    description:
      'Find all the latest remote testing jobs using Cypress on multiple websites in one place. Remote end to end testing with Cypress.',
  },
  spark: {
    link: '/remote-development-jobs/big-data/spark/',
    title: 'Apache Spark',
    headline: 'Apache Spark',
    description:
      'Find all the latest remote Big Data jobs with Apache Spark on multiple websites in one place.',
  },
  flink: {
    link: '/remote-development-jobs/big-data/flink/',
    title: 'Apache Flink',
    headline: 'Apache Flink',
    description:
      'Find all the latest remote Big Data jobs with Apache Flink on multiple websites in one place.',
  },
};
export const ALL_META = { ...CATEGORIES_META, ...DEV_CATEGORIES_META, ...SUBSUBCATEGORIES_META };
