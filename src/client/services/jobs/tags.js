// @flow
import { CATEGORIES_META, DEV_CATEGORIES_META } from '../../../server/consts/categories';

export const TAG_LINKS = {
  design: CATEGORIES_META.design.link,
  copywriting: CATEGORIES_META.copywriting.link,
  'customer support': CATEGORIES_META['customer-support'].link,
  'sales and marketing': CATEGORIES_META['sales-and-marketing'].link,
  dev: CATEGORIES_META.development.link,
  mobile: DEV_CATEGORIES_META.mobile.link,
  frontend: DEV_CATEGORIES_META.frontend.link,
  backend: DEV_CATEGORIES_META.backend.link,
  'full stack': DEV_CATEGORIES_META[`full-stack`].link,
  devops: DEV_CATEGORIES_META.devops.link,
  'game dev': DEV_CATEGORIES_META.games.link,
  blockchain: DEV_CATEGORIES_META.blockchain.link,
};

// simple
const TAGS = {
  PHP: 'php',
  KOTLIN: 'kotlin',
  SAP: 'sap',
  SYMFONY: 'symfony',
  LARAVEL: 'laravel',
  WORDPRESS: 'wordpress',
  DRUPAL: 'drupal',
  MAGENTO: 'magento',
  ELIXIR: 'elixir',
  LINUX: 'linux',
  // JAVA: 'java',
  SPRING: 'spring',
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
  SEO: 'seo',
  ACCOUNTING: 'accounting',
  // MANAGER: 'manager',
  CPP: 'c++',
  SQL: 'sql',
  ELASTICSEARCH: 'elasticsearch',
  AWS: 'aws',
  SALES: 'sales',
  MARKETING: 'marketing',
  SECURITY: 'security',
  GRAPHQL: 'graphql',
  DOCKER: 'docker',
  KUBERNETES: 'kubernetes',
  RANCHER: 'rancher',
  HADOOP: 'hadoop',
  PRODUCT: 'product',
  SPARK: 'spark',
  FLINK: 'flink',
  ERLANG: 'erlang',
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
    tags.push('dev');
  }
  if (lowerCaseTitle.includes('product manager')) {
    tags.push('product management');
  }
  if (lowerCaseTitle.includes('project manager')) {
    tags.push('project management');
  }
  if (
    lowerCaseTitle.includes('director') ||
    lowerCaseTitle.includes('lead') ||
    lowerCaseTitle.includes('vp ') ||
    lowerCaseTitle.includes('vice president')
  ) {
    tags.push('lead');
  }
  if (lowerCaseTitle.includes('big data')) {
    tags.push('big data');
  }
  if (
    lowerCaseTitle.includes('ops') ||
    lowerCaseTitle.includes('system admin') ||
    lowerCaseTitle.includes('infrastructure')
  ) {
    tags.push('devops');
  }
  if (
    lowerCaseTitle.includes('compiler') ||
    lowerCaseTitle.includes('interpreter') ||
    lowerCaseTitle.includes('type-system')
  ) {
    tags.push('compilers');
  }
  if (lowerCaseTitle.includes('exec')) {
    tags.push('exec');
  }
  if (lowerCaseTitle.includes('react') && lowerCaseTitle.includes('react native')) {
    tags.push('mobile');
    tags.push('multiplatform');
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
    tags.push('mobile');
  }
  if (
    lowerCaseTitle.includes('game') ||
    lowerCaseTitle.includes('gaming') ||
    lowerCaseTitle.includes('games')
  ) {
    tags.push('game dev');
  }
  if (lowerCaseTitle.includes('data scientist') || lowerCaseTitle.includes('data science')) {
    tags.push('data science');
  }
  if (
    (lowerCaseTitle.includes('fullstack') ||
      lowerCaseTitle.includes('full stack') ||
      lowerCaseTitle.includes('full-stack') ||
      lowerCaseTitle.includes('django') ||
      lowerCaseTitle.includes('rails')) &&
    !tags.includes('full stack')
  ) {
    tags.push('full stack');
  }
  if (
    lowerCaseTitle.includes('macos') ||
    lowerCaseTitle.includes('mac os') ||
    lowerCaseTitle.includes('osx')
  ) {
    tags.push('osx');
  }
  if (
    !tags.includes('backend') &&
    (lowerCaseTitle.includes('backend') ||
      lowerCaseTitle.includes('back end') ||
      lowerCaseTitle.includes('back-end'))
  ) {
    tags.push('backend');
  }
  if (lowerCaseTitle.includes('desktop')) {
    tags.push('desktop apps');
  }
  if (lowerCaseTitle.includes('health')) {
    tags.push('healthcare');
  }
  if (
    lowerCaseTitle.includes('test') ||
    lowerCaseTitle.includes('quality') ||
    lowerCaseTitle.includes('qa ')
  ) {
    tags.push('testing');
  }
  if (lowerCaseTitle.includes('support') || lowerCaseTitle.includes('customer')) {
    tags.push('customer support');
  }
  if (
    lowerCaseTitle.includes('hr ') ||
    (lowerCaseTitle.includes('human') && lowerCaseTitle.includes('resources'))
  ) {
    tags.push('human resources');
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
    tags.push('javascript');
    tags.push('frontend');
    tags.push('web dev');
  }
  if (
    lowerCaseTitle.includes('wordpress') ||
    lowerCaseTitle.includes('cms') ||
    lowerCaseTitle.includes('drupal') ||
    lowerCaseTitle.includes('magento') ||
    lowerCaseTitle.includes('magnolia')
  ) {
    tags.push('cms');
  }
  if (
    lowerCaseTitle.includes('blockchain') ||
    lowerCaseTitle.includes('ledger') ||
    (lowerCaseTitle.includes('crypto') && !lowerCaseTitle.includes('cryptography'))
  ) {
    tags.push('blockchain');
  }
  Object.keys(TAGS).forEach(tag => {
    if (lowerCaseTitle.includes(TAGS[tag])) {
      tags.push(TAGS[tag]);
    }
  });
  if (!lowerCaseTitle.includes('javascript') && lowerCaseTitle.includes('java')) {
    tags.push('java');
  }
  if (lowerCaseTitle.includes('vue')) {
    tags.push('vuejs');
  }
  if (lowerCaseTitle.includes('marketing') || lowerCaseTitle.includes('sales')) {
    tags.push('sales and marketing');
  }
  if (lowerCaseTitle.includes('.net')) {
    tags.push('.net');
    tags.push('c#');
  } else if (lowerCaseTitle.includes('c#')) {
    tags.push('c#');
  }
  if (
    lowerCaseTitle.startsWith('go ') ||
    lowerCaseTitle.includes('golang') ||
    lowerCaseTitle.includes(' go ') ||
    lowerCaseTitle.includes('(go)')
  ) {
    tags.push('golang');
  }
  if (lowerCaseTitle.includes('copywrit') || lowerCaseTitle.includes('writer')) {
    tags.push('copywriting');
  }
  if (lowerCaseTitle.includes('node')) {
    tags.push('nodejs');
  }
  if (lowerCaseTitle.startsWith('r ')) {
    tags.push('r');
  }
  if (lowerCaseTitle.includes('scala')) {
    tags.push('scala');
    if (!tags.includes('backend')) {
      tags.push('backend');
    }
  }
  if (lowerCaseTitle.includes('cryptography')) {
    tags.push('cryptography');
    if (!tags.includes('backend')) {
      tags.push('backend');
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
