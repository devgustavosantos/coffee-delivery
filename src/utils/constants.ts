import { name as appName, version as appVersion } from '@/../package.json';

const LOCAL_STORAGE_KEY = `${appName}.cart@${appVersion}`;

const MIN_NUMBER_OF_PRODUCTS = 1;

const SHIPPING_PRICE = 5;

const CASH_PAYMENT_DISCOUNT_PERCENTAGE = 10;

export {
  LOCAL_STORAGE_KEY,
  MIN_NUMBER_OF_PRODUCTS,
  SHIPPING_PRICE,
  CASH_PAYMENT_DISCOUNT_PERCENTAGE,
};
