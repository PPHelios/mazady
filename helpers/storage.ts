import { encryptStorage } from "../lib/store";

const setItemToStorage = (key: string, value: string) =>
  encryptStorage.setItem(key, value);

const setMultipleItemsToStorage = (items: Record<string, string>) => {
  Object.entries(items).forEach(([key, value]) => {
    encryptStorage.setItem(key, value);
  });
};

const getItemFromStorage = (key: string) => encryptStorage.getItem(key);

const removeItemFromStorage = (key: string) => encryptStorage.removeItem(key);

export {
  setItemToStorage,
  setMultipleItemsToStorage,
  getItemFromStorage,
  removeItemFromStorage,
};
