import { flow, types } from 'mobx-state-tree';
import { remove, save } from '../../utils/storage';
import { withSetPropAction } from '../../utils/with-set-prop-action';

export const Authentication = types
  .model('Authentication')
  .props({
    isAuthenticated: types.optional(types.boolean, false)
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setToken: flow(function* (accessToken: string) {
      yield save('accessToken', accessToken);
    }),
    setAuthenticated(value: boolean) {
      self.isAuthenticated = value;
    },
    logout: flow(function* () {
      const res = yield remove('accessToken');
      if (res) {
        self.isAuthenticated = false;
      }
    }),
  }));

