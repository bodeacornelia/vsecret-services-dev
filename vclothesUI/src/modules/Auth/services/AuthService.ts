import Auth from '../../../utils/AuthenticationUtils';
import AuthGateway from './AuthGateway';

class AuthService {
  gateway: AuthGateway;

  constructor() {
    this.gateway = new AuthGateway();
  }

  login(data: any): Promise<any> {
    return this.gateway.login(data)
      .then(({ data }) => data.token)
      .catch((error) => Promise.reject(error));
  }
}

export default new AuthService();
