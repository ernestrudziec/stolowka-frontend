export const ACTIONS = {
  LOGIN_USER: { name: 'LOGIN_USER', url: '/auth/jwt/obtain/', method: 'POST', auth: false },
  REFRESH_TOKEN: { name: 'REFRESH_TOKEN', url: '/auth/jwt/refresh/', method: 'POST', auth: false },
  GET_MAIN_TREE: { name: 'GET_MAIN_TREE', url: '/api/main/', method: 'GET', auth: true }
};
