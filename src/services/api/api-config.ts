import { create } from 'apisauce';
import qs from 'qs';
import { loadString } from '../../utils/storage';

export const apiGateway = create({
  baseURL: process.env.REACT_APP_API_GATEWAY_URL,
  headers: {
    "accept": 'application/json',
  },
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'comma' })
});

apiGateway.addAsyncRequestTransform((request) => async () => {
  const token = await loadString('accessToken');
  if (token) {
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${JSON.parse(token)}`
    };
  }
});