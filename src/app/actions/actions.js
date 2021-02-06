export const ACTIONS = {
  LOGIN_USER: { name: 'LOGIN_USER', url: '/auth/jwt/obtain/', method: 'POST', auth: false },
  REFRESH_TOKEN: { name: 'REFRESH_TOKEN', url: '/auth/jwt/refresh/', method: 'POST', auth: false },
  GET_MAIN_TREE: { name: 'GET_MAIN_TREE', url: '/api/main/', method: 'GET', auth: true },
  ADD_CITY: { name: 'ADD_CITY', url: '/api/complex/', method: 'POST', auth: true },
  ADD_UNIT: { name: 'ADD_UNIT', url: '/api/complex/:id/unit/', method: 'POST', auth: true },
  ADD_GROUP: { name: 'ADD_GROUP', url: '/api/unit/:id/group/', method: 'POST', auth: true },
  DELETE_CITY: { name: 'DELETE_CITY', url: '/api/complex/:id/', method: 'DELETE', auth: true },
  DELETE_UNIT: { name: 'DELETE_UNIT', url: '/api/unit/:id/', method: 'DELETE', auth: true },
  DELETE_GROUP: { name: 'DELETE_GROUP', url: '/api/group/:id/', method: 'DELETE', auth: true }
};
