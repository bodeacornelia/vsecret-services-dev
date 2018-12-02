import { default as Gateway } from '../../../utils/GatewayUtils';

export default class AuthGateway extends Gateway {
  constructor() {
    super();
  }

  login = (data: any) => this.request('/login', data)
    .then((response) => ({ ...response }))
}
