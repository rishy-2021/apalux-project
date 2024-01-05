import { Instance, SnapshotIn, SnapshotOut, types } from 'mobx-state-tree';

export const User = types.model('User').props({
  _id: types.optional(types.string, ''),
  name: types.optional(types.string, ''),
  designation: types.optional(types.string, ''),
  email: types.maybeNull(types.string),
  address: types.maybeNull(types.model({
    localityLine: types.optional(types.string, ''),
    city: types.optional(types.string, ''),
    state: types.optional(types.string, ''),
    pinCode: types.optional(types.string, ''),
  })),
});

export interface User extends Instance<typeof User> { }
export interface UserSnapshotOut extends SnapshotOut<typeof User> { }
export interface UserStoreSnapshotIn extends SnapshotIn<typeof User> { }
