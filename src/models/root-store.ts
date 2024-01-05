import { applySnapshot, Instance, SnapshotOut, types } from 'mobx-state-tree';
import { UserStore } from './user/user-store';

export const RootStoreModel = types
  .model('RootStore')
  .props({
    userStore: types.optional(UserStore, {} as any)
  })
  .actions((self) => ({
    reset() {
      applySnapshot(self, {});
    },
  }));

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { }
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
