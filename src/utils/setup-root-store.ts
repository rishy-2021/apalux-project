import { applySnapshot, IDisposer, onSnapshot } from 'mobx-state-tree';
import type { RootStore } from '../models/root-store';
import * as storage from './storage';

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root-entx';

/**
 * Setup the root state.
 */
let _disposer: IDisposer | undefined;
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any;

  try {
    // load the last known state from AsyncStorage
    restoredState = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {};
    applySnapshot(rootStore, restoredState);
  } catch (e) {
    console.error(e, null);
  }

  // stop tracking state changes if we've already setup
  if (_disposer) {
    _disposer();
  }

  // track changes & save to AsyncStorage
  _disposer = onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot));

  const unsubscribe = () => {
    if (_disposer) {
      _disposer();
      _disposer = undefined;
    }
  };

  return { rootStore, restoredState, unsubscribe };
}
