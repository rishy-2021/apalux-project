import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

export const Tag = types
  .model('Tag', {
    url: types.optional(types.string, '')
  });

export interface Tag extends Instance<typeof Tag> { }
export interface TagSnapshotOut
  extends SnapshotOut<typeof Tag> { }
export interface TagStoreSnapshotIn
  extends SnapshotIn<typeof Tag> { }
