import AuthService from '../services/AuthService';
import Auth from '../../../utils/AuthenticationUtils';
import { navigateTo } from '../../Menu/store/actions';

export const login = (payload: any) => (dispatch: any) => {
  AuthService.login(payload).then((token: string) => { Auth.setToken(token); })
  console.log('sunt aici');
  if (Auth.getToken()) {
    dispatch(navigateTo({
      path: '/home',
      keys: {},
      options: {}
    }))
  }
};
