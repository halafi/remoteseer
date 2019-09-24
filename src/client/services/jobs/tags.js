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
  nodejs: SUBSUBCATEGORIES_META.nodejs.link,
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
  FLUTTER: 'flutter',
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
  // PRODUCT: 'product',
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
  if (lowerCaseTitle.includes('product manag')) {
    tags.push('product management');
  }
  if (lowerCaseTitle.includes('project manag')) {
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
  if (
    lowerCaseTitle.includes('react native') ||
    lowerCaseTitle.includes('flutter') ||
    lowerCaseTitle.includes('ionic') ||
    lowerCaseTitle.includes('xamarin')
  ) {
    tags.push('mobile');
    tags.push('cross platform');
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

  if (lowerCaseTitle.includes('kotlin') && !lowerCaseTitle.includes('android')) {
    tags.push('android');
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
    tags.push('qa');
  } else if (lowerCaseTitle.includes('assurance')) {
    tags.push('qa');
  } else if (lowerCaseTitle.includes('automation')) {
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
  if (lowerCaseTitle.includes('seo') && !lowerCaseTitle.includes('seoul')) {
    tags.push('seo');
  }
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
