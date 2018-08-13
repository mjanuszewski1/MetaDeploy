// @flow

import type { UserAction } from './actions';

export type User = {
  +username?: ?string,
  +first_name?: ?string,
  +last_name?: ?string,
  +email?: ?string,
};

const reducer = (state: User = {}, action: UserAction): User => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return action.payload;
    case 'USER_LOGGED_OUT':
      return action.payload === state.username ? {} : state;
  }
  return state;
};

export default reducer;