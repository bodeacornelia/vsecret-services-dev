import axios from 'axios';
import { default as config } from '../../config/environments/development';
import Auth from '../utils/AuthenticationUtils';

const CONTENT_TYPE = 'application/json';
const DEFAULT_METHOD = 'POST';

interface IOptions {
  method?: string;
  url?: string;
  data?: object | string;
  headers?: object;
  cache?: any;
}

interface IRequest {
  data: any;
}

export default class Gateway {
  get config() {
    return config;
  }

  get defaultMethod() {
    return DEFAULT_METHOD;
  }

  get baseUrl(): string {
    return `${this.config.API_URL}${this.config.API_BASE}`;
  }

  get headers(): object {
    return {
      'Content-Type': CONTENT_TYPE,
      'Authorization': `bearer ${Auth.getToken()}`,
    };
  }

  get client() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }

  request(url: string, data?: object): Promise<IRequest> {
    const options: IOptions = this.requestOptions(url, data);

    return this.client(options)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  private onSuccess(response: any) {
    return response;
  }

  private onError(error: any) {
    return Promise.reject(error.response || error.message);
  }

  private requestOptions(endpoint: string, data: object): IOptions {
    const options: IOptions = {};

    options.method = this.defaultMethod;
    options.url = `${endpoint}`;
    options.data = data;

    return options;
  }
}
