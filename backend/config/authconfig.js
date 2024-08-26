import { auth } from 'express-openid-connect';

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'ASDFJPORFFallpodffojfhffnpFPOAOFJASDSDF',
  baseURL: 'http://localhost:3000',
  clientID: 'obXy9ZInJl1wPOaMdxSxIDXHfgFoLvuZ',
  issuerBaseURL: 'https://dev-qc2i8zmaeh5535u5.us.auth0.com',
  clientSecret:'MkkPwu0s1pamhC9gZM2a71xhapnL1_LCUYdlH5JPs4-_TA7jVktWP1KTzznkBvse',
  routes: {
    login: false,
    logout: false
  },
  authorizationParams: {
    response_type: 'code',
    scope: 'openid profile email'
  },
  session: {
    absoluteDuration: 24 * 60 * 60, // 24 hours in seconds
    rolling: true,
    rollingDuration: 60 * 60 // 1 hour in seconds
  },
  httpTimeout: 10000 // 10 seconds
};
export default config;