import { name as appName, version as appVersion } from '@/../package.json';

const MIN_NUMBER_OF_PRODUCTS = 1;

const LOCAL_STORAGE_KEY = `${appName}.cart@${appVersion}`;

export { MIN_NUMBER_OF_PRODUCTS, LOCAL_STORAGE_KEY };
