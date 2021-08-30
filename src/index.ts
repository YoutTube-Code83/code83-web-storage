import Cookies from 'js-cookie';
import { StorageData } from './types/storage';

export const setStorageData = ({ type, key, value }: StorageData): void => {
  switch (type) {
    case 'cookie':
      Cookies.set(key, value);
      break;
    case 'local':
      localStorage.set(key, value);
      break;
    default:
      sessionStorage.set(key, value);
      break;
  }
};

export const getStorageData = ({
  key,
  type,
}: Omit<StorageData, 'value'>): string | undefined => {
  switch (type) {
    case 'cookie':
      return Cookies.get(key);
    case 'local':
      return localStorage.get(key);
    default:
      return sessionStorage.get(key);
  }
};
