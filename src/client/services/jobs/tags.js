// @flow
import {
  CATEGORIES_META,
  DEV_CATEGORIES_META,
  SUBSUBCATEGORIES_META,
} from '../../../server/consts/categories';

export const TAG_LINKS = {
  design: CATEGORIES_META.design.link,
  copywriting: CATEGORIES_META.copywriting.link,
  'customer support': CATEGORIES_META['customer-support'].link,
  'sales and marketing': CATEGORIES_META['sales-and-marketing'].link,
  dev: CATEGORIES_META.development.link,
  'human resources': CATEGORIES_META['human-resources'].link,
  lead: CATEGORIES_META.lead.link,
  exec: CATEGORIES_META.exec.link,
  manager: CATEGORIES_META.manager.link,
  mobile: DEV_CATEGORIES_META.mobile.link,
  frontend: DEV_CATEGORIES_META.frontend.link,
  backend: DEV_CATEGORIES_META.backend.link,
  'full stack': DEV_CATEGORIES_META[`full-stack`].link,
  devops: DEV_CATEGORIES_META.devops.link,
  'game dev': DEV_CATEGORIES_META.games.link,
  blockchain: DEV_CATEGORIES_META.blockchain.link,
  cryptocurrency: DEV_CATEGORIES_META.cryptocurrency.link,
  javascript: DEV_CATEGORIES_META.javascript.link,
  'web dev': DEV_CATEGORIES_META.web.link,
  testing: DEV_CATEGORIES_META.testing.link,
  qa: DEV_CATEGORIES_META['quality-assurance'].link,
  'project management': DEV_CATEGORIES_META['project-management'].link,
  'product management': DEV_CATEGORIES_META['product-management'].link,
  cloud: DEV_CATEGORIES_META.cloud.link,
  security: DEV_CATEGORIES_META.security.link,
  nodejs: SUBSUBCATEGORIES_META.nodejs.link,
  cms: SUBSUBCATEGORIES_META.cms.link,
  graphql: SUBSUBCATEGORIES_META.graphql.link,
  docker: SUBSUBCATEGORIES_META.docker.link,
  kubernetes: SUBSUBCATEGORIES_META.kubernetes.link,
  jenkins: SUBSUBCATEGORIES_META.jenkins.link,
  aws: SUBSUBCATEGORIES_META.aws.link,
  'c#': SUBSUBCATEGORIES_META['c-sharp'].link,
  '.net': SUBSUBCATEGORIES_META.dotnet.link,
  seo: DEV_CATEGORIES_META.seo.link,
  sales: DEV_CATEGORIES_META.sales.link,
  marketing: DEV_CATEGORIES_META.marketing.link,
  react: SUBSUBCATEGORIES_META.react.link,
  angular: SUBSUBCATEGORIES_META.angular.link,
  vuejs: SUBSUBCATEGORIES_META.vue.link,
  php: SUBSUBCATEGORIES_META.php.link,
  scala: SUBSUBCATEGORIES_META.scala.link,
  ruby: SUBSUBCATEGORIES_META.ruby.link,
  java: SUBSUBCATEGORIES_META.java.link,
  'c++': SUBSUBCATEGORIES_META['c++'].link,
  golang: SUBSUBCATEGORIES_META.go.link,
  python: SUBSUBCATEGORIES_META.python.link,
  ios: SUBSUBCATEGORIES_META.ios.link,
  android: SUBSUBCATEGORIES_META.android.link,
  'cross platform': SUBSUBCATEGORIES_META['cross-platform'].link,
  django: SUBSUBCATEGORIES_META.django.link,
  rails: SUBSUBCATEGORIES_META['ruby-on-rails'].link,
  // kotlin: SUBSUBCATEGORIES_META.kotlin.link,
  // flutter: SUBSUBCATEGORIES_META.flutter.link,
  // ionic: SUBSUBCATEGORIES_META.ionic.link,
};

// simple
export const TAGS = {
  PHP: 'php',
  KOTLIN: 'kotlin',
  SAP: 'sap',
  SYMFONY: 'symfony',
  LARAVEL: 'laravel',
  WORDPRESS: 'wordpress',
  DRUPAL: 'drupal',
  MAGENTO: 'magento',
  ELIXIR: 'elixir',
  FLUTTER: 'flutter',
  LINUX: 'linux',
  // JAVA: 'java',
  SPRING: 'spring',
  ELECTRON: 'electron',
  FIGMA: 'figma',
  SKETCH: 'sketch',
  WINDOWS: 'windows',
  PYTHON: 'python',
  CLOUD: 'cloud',
  FIREBASE: 'firebase',
  DESIGN: 'design',
  DJANGO: 'django',
  FLASK: 'flask',
  REACT: 'react',
  ANGULAR: 'angular',
  CYPRESS: 'cypress',
  LOCUST: 'locust',
  GHERKIN: 'gherkin',
  HIPTEST: 'hiptest',
  OPENGL: 'opengl',
  ANDROID: 'android',
  CLOJURE: 'clojure',
  RUBY: 'ruby',
  RAILS: 'rails',
  IOS: 'ios',
  IONIC: 'ionic',
  XAMARIN: 'xamarin',
  SWIFT: 'swift',
  ACCOUNTING: 'accounting',
  MANAGER: 'manager',
  CPP: 'c++',
  SQL: 'sql',
  ELASTICSEARCH: 'elasticsearch',
  AWS: 'aws',
  SALES: 'sales',
  MARKETING: 'marketing',
  SECURITY: 'security',
  GRAPHQL: 'graphql',
  DOCKER: 'docker',
  JENKINS: 'jenkins',
  KUBERNETES: 'kubernetes',
  RANCHER: 'rancher',
  HADOOP: 'hadoop',
  // PRODUCT: 'product',
  SPARK: 'spark',
  FLINK: 'flink',
  ERLANG: 'erlang',
};

export const ALLOWED_TAGS = {
  DEV: 'dev',
  PRODUCT_MANAGEMENT: 'product management',
  PROJECT_MANAGEMENT: 'project management',
  LEAD: 'lead',
  BIG_DATA: 'big data',
  DEVOPS: 'devops',
  COMPILERS: 'compilers',
  EXEC: 'exec',
  MOBILE: 'mobile',
  CROSS_PLATFORM: 'cross platform',
  ANDROID: 'android',
  GAME_DEV: 'game dev',
  DATA_SCIENCE: 'data science',
  FULL_STACK: 'full stack',
  OSX: 'osx',
  BACKEND: 'backend',
  DESKTOP_APPS: 'desktop_apps',
  HEALTHCARE: 'healthcare',
  TESTING: 'testing',
  QA: 'qa',
  CUSTOMER_SUPPORT: 'customer support',
  HUMAN_RESOURCES: 'human resources',
  JAVASCRIPT: 'javascript',
  FRONTEND: 'frontend',
  WEB_DEV: 'web dev',
  CMS: 'cms',
  BLOCKCHAIN: 'blockchain',
  SEO: 'seo',
  JAVA: 'java',
  VUEJS: 'vuejs',
  SALES_AND_MARKETING: 'sales and marketing',
  DOTNET: '.net',
  CSHARP: 'c#',
  GOLANG: 'golang',
  COPYWRITING: 'copywriting',
  NODEJS: 'nodejs',
  R: 'r',
  SCALA: 'scala',
  CRYPTOGRAPHY: 'cryptography',
};

export default function getTags(title: string): string[] {
  const tags = [];
  const lowerCaseTitle = title.toLowerCase();
  if (
    lowerCaseTitle.includes('entwickler') ||
    lowerCaseTitle.includes('developer') ||
    lowerCaseTitle.includes('engineer') ||
    lowerCaseTitle.includes('development') ||
    lowerCaseTitle.includes('architect')
  ) {
    tags.push(ALLOWED_TAGS.DEV);
  }
  if (lowerCaseTitle.includes('product manag')) {
    tags.push(ALLOWED_TAGS.PRODUCT_MANAGEMENT);
  }
  if (lowerCaseTitle.includes('project manag')) {
    tags.push(ALLOWED_TAGS.PROJECT_MANAGEMENT);
  }
  if (
    lowerCaseTitle.includes('director') ||
    lowerCaseTitle.includes('lead') ||
    lowerCaseTitle.includes('vp ') ||
    lowerCaseTitle.includes('vice president')
  ) {
    tags.push(ALLOWED_TAGS.LEAD);
  }
  if (lowerCaseTitle.includes('big data')) {
    tags.push(ALLOWED_TAGS.BIG_DATA);
  }
  if (
    lowerCaseTitle.includes('ops') ||
    lowerCaseTitle.includes('system admin') ||
    lowerCaseTitle.includes('infrastructure')
  ) {
    tags.push(ALLOWED_TAGS.DEVOPS);
  }
  if (
    lowerCaseTitle.includes('compiler') ||
    lowerCaseTitle.includes('interpreter') ||
    lowerCaseTitle.includes('type-system')
  ) {
    tags.push(ALLOWED_TAGS.COMPILERS);
  }
  if (lowerCaseTitle.includes('exec')) {
    tags.push(ALLOWED_TAGS.EXEC);
  }
  if (
    lowerCaseTitle.includes('react native') ||
    lowerCaseTitle.includes('flutter') ||
    lowerCaseTitle.includes('ionic') ||
    lowerCaseTitle.includes('xamarin')
  ) {
    tags.push(ALLOWED_TAGS.MOBILE);
    tags.push(ALLOWED_TAGS.CROSS_PLATFORM);
  }
  if (
    lowerCaseTitle.includes('mobile') ||
    lowerCaseTitle.includes('xamarin') ||
    lowerCaseTitle.includes('cross platform app developer') ||
    lowerCaseTitle.includes('ios') ||
    lowerCaseTitle.includes('android') ||
    lowerCaseTitle.includes('swift') ||
    lowerCaseTitle.includes('kotlin') ||
    lowerCaseTitle.includes('ionic')
  ) {
    tags.push(ALLOWED_TAGS.MOBILE);
  }

  if (lowerCaseTitle.includes('kotlin') && !lowerCaseTitle.includes('android')) {
    tags.push(ALLOWED_TAGS.ANDROID);
  }
  if (
    lowerCaseTitle.includes('game') ||
    lowerCaseTitle.includes('gaming') ||
    lowerCaseTitle.includes('games')
  ) {
    tags.push(ALLOWED_TAGS.GAME_DEV);
  }
  if (lowerCaseTitle.includes('data scientist') || lowerCaseTitle.includes('data science')) {
    tags.push(ALLOWED_TAGS.DATA_SCIENCE);
  }
  if (
    (lowerCaseTitle.includes('fullstack') ||
      lowerCaseTitle.includes('full stack') ||
      lowerCaseTitle.includes('full-stack') ||
      lowerCaseTitle.includes('django') ||
      lowerCaseTitle.includes('rails')) &&
    !tags.includes(ALLOWED_TAGS.FULL_STACK)
  ) {
    tags.push(ALLOWED_TAGS.FULL_STACK);
  }
  if (
    lowerCaseTitle.includes('macos') ||
    lowerCaseTitle.includes('mac os') ||
    lowerCaseTitle.includes('osx')
  ) {
    tags.push(ALLOWED_TAGS.OSX);
  }
  if (
    !tags.includes(ALLOWED_TAGS.BACKEND) &&
    (lowerCaseTitle.includes('backend') ||
      lowerCaseTitle.includes('back end') ||
      lowerCaseTitle.includes('back-end'))
  ) {
    tags.push(ALLOWED_TAGS.BACKEND);
  }
  if (lowerCaseTitle.includes('desktop')) {
    tags.push(ALLOWED_TAGS.DESKTOP_APPS);
  }
  if (lowerCaseTitle.includes('health')) {
    tags.push(ALLOWED_TAGS.HEALTHCARE);
  }
  if (
    lowerCaseTitle.includes('test') ||
    lowerCaseTitle.includes('quality') ||
    lowerCaseTitle.includes('qa ')
  ) {
    tags.push(ALLOWED_TAGS.TESTING);
    tags.push(ALLOWED_TAGS.QA);
  } else if (lowerCaseTitle.includes('assurance')) {
    tags.push(ALLOWED_TAGS.QA);
  } else if (lowerCaseTitle.includes('automation')) {
    tags.push(ALLOWED_TAGS.TESTING);
  }
  if (lowerCaseTitle.includes('support') || lowerCaseTitle.includes('customer')) {
    tags.push(ALLOWED_TAGS.CUSTOMER_SUPPORT);
  }
  if (
    lowerCaseTitle.includes('hr ') ||
    (lowerCaseTitle.includes('human') && lowerCaseTitle.includes('resources'))
  ) {
    tags.push(ALLOWED_TAGS.HUMAN_RESOURCES);
  }
  if (
    !lowerCaseTitle.includes('devops') &&
    (lowerCaseTitle.includes('javascript') ||
      lowerCaseTitle.includes(', js') ||
      lowerCaseTitle.includes('frontend') ||
      lowerCaseTitle.includes('front-end') ||
      (lowerCaseTitle.includes('web') && !lowerCaseTitle.includes('design')) ||
      (lowerCaseTitle.includes('react') && !lowerCaseTitle.includes('react native')) ||
      lowerCaseTitle.includes('angular') ||
      lowerCaseTitle.includes('vue') ||
      lowerCaseTitle.includes('php'))
  ) {
    tags.push(ALLOWED_TAGS.JAVASCRIPT);
    tags.push(ALLOWED_TAGS.FRONTEND);
    tags.push(ALLOWED_TAGS.WEB_DEV);
  }
  if (
    lowerCaseTitle.includes('wordpress') ||
    lowerCaseTitle.includes('cms') ||
    lowerCaseTitle.includes('drupal') ||
    lowerCaseTitle.includes('magento') ||
    lowerCaseTitle.includes('magnolia')
  ) {
    tags.push(ALLOWED_TAGS.CMS);
  }
  if (
    lowerCaseTitle.includes('blockchain') ||
    lowerCaseTitle.includes('ledger') ||
    (lowerCaseTitle.includes('crypto') && !lowerCaseTitle.includes('cryptography'))
  ) {
    tags.push(ALLOWED_TAGS.BLOCKCHAIN);
  }
  Object.keys(TAGS).forEach(tag => {
    if (lowerCaseTitle.includes(TAGS[tag])) {
      tags.push(TAGS[tag]);
    }
  });
  if (lowerCaseTitle.includes('seo') && !lowerCaseTitle.includes('seoul')) {
    tags.push(ALLOWED_TAGS.SEO);
  }
  if (!lowerCaseTitle.includes('javascript') && lowerCaseTitle.includes('java')) {
    tags.push(ALLOWED_TAGS.JAVA);
  }
  if (lowerCaseTitle.includes('vue')) {
    tags.push(ALLOWED_TAGS.VUEJS);
  }
  if (lowerCaseTitle.includes('marketing') || lowerCaseTitle.includes('sales')) {
    tags.push(ALLOWED_TAGS.SALES_AND_MARKETING);
  }
  if (lowerCaseTitle.includes('.net')) {
    tags.push(ALLOWED_TAGS.DOTNET);
    tags.push(ALLOWED_TAGS.CSHARP);
  } else if (lowerCaseTitle.includes('c#')) {
    tags.push(ALLOWED_TAGS.CSHARP);
  }
  if (
    lowerCaseTitle.startsWith('go ') ||
    lowerCaseTitle.includes('golang') ||
    lowerCaseTitle.includes(' go ') ||
    lowerCaseTitle.includes('(go)')
  ) {
    tags.push(ALLOWED_TAGS.GOLANG);
  }
  if (lowerCaseTitle.includes('copywrit') || lowerCaseTitle.includes('writer')) {
    tags.push(ALLOWED_TAGS.COPYWRITING);
  }
  if (lowerCaseTitle.includes('node')) {
    tags.push(ALLOWED_TAGS.NODEJS);
  }
  if (lowerCaseTitle.startsWith('r ')) {
    tags.push(ALLOWED_TAGS.R);
  }
  if (lowerCaseTitle.includes('scala')) {
    tags.push(ALLOWED_TAGS.SCALA);
    if (!tags.includes(ALLOWED_TAGS.BACKEND)) {
      tags.push(ALLOWED_TAGS.BACKEND);
    }
  }
  if (lowerCaseTitle.includes('cryptography')) {
    tags.push(ALLOWED_TAGS.CRYPTOGRAPHY);
    if (!tags.includes(ALLOWED_TAGS.BACKEND)) {
      tags.push(ALLOWED_TAGS.BACKEND);
    }
  }
  // if (
  //   tags.includes('dev') &&
  //   !tags.includes('full stack') &&
  //   !tags.includes('mobile') &&
  //   !tags.includes('frontend') &&
  //   !tags.includes('backend')
  // ) {
  //   tags.push('full stack');
  // }
  return tags;
}
