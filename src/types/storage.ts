export interface StorageData {
  type: 'cookie' | 'local' | 'session';
  key: string;
  value: string;
}
