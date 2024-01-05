import { flow, types } from 'mobx-state-tree';
import { save } from '../../utils/storage';
import { withSetPropAction } from '../../utils/with-set-prop-action';
import { Authentication } from '../auth/authentication';
import { User, UserModel } from './user';

export const UserStore = types
  .model('UserStore')
  .props({
    auth: types.optional(Authentication, {}),
    user: types.optional(UserModel, {}),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setAuthentication: flow(function* (accessToken: string, user: User) {
      yield save('accessToken', accessToken);
      self.setProp('user', user);
      self.auth.setAuthenticated(true);
    }),
    updateUser(user: User) {
      self.setProp('user', user);
    }
  }));

