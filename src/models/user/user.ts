import { Instance, types } from 'mobx-state-tree';

export const UserModel = types.model('User').props({
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

export interface User extends Instance<typeof UserModel> { }
