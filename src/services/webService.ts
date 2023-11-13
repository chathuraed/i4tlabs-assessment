import AppService from './appService';

interface HeadersObject {
  Accept: string;
  'Content-Type': string;
  'Accept-Encoding': string;
  Connection: string;
  Authorization?: string;
}

interface RequestConfig {
  method: string;
  headers: HeadersObject;
  body?: string;
}

interface WebServiceOptions {
  [key: string]: any;
}

const WebService = {
  request: async (
    url: string,
    method: string,
    data: any,
    secured: boolean,
    options?: WebServiceOptions,
  ) => {
    try {
      let apiLocation = AppService.getAPI() + url;

      const headersObj: HeadersObject = {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      };

      const authToken = AppService.accessToken;
      if (secured && authToken) {
        headersObj.Authorization = `Bearer ${authToken}`;
      }

      let requestConfig: RequestConfig = {
        method: method,
        headers: headersObj,
      };

      if (['POST', 'PUT', 'PATCH'].includes(method) && data) {
        requestConfig.body = JSON.stringify(data);
      } else {
        headersObj['Content-Type'] = 'application/x-www-form-urlencoded';

        if (typeof data === 'object' && Object.keys(data).length !== 0) {
          apiLocation += '?' + WebService.addParamsToURL(data);
        }
      }

      const response = await fetch(apiLocation, requestConfig);

      // if (response.status === 401) {
      //   const refreshResult = await WebService.refreshToken();
      //   if (refreshResult) {
      //     return await WebService.request(url, method, data, secured, options);
      //   } else {
      //     return Promise.reject(false);
      //   }
      // } else {
      //   return response;
      // }
      return response;
    } catch (error) {
      throw error;
    }
  },
  addParamsToURL: (params: WebServiceOptions) => {
    if (
      params &&
      Object.entries(params).length !== 0 &&
      params.constructor === Object
    ) {
      let temp = '';
      let count = 0;
      for (const [key, value] of Object.entries(params)) {
        temp += `${count === 0 ? '' : '&'}${key}=${value}`;
        count++;
      }
      return temp;
    }
    return '';
  },
};

export default WebService;
