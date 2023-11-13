import WebService from '../../../services/webService';

const AuthService = {
  loginUser: async (data: any) => {
    return WebService.request('/auth/login', 'POST', data, false);
  },
};

export default AuthService;
