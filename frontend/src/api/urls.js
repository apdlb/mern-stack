const urlBase = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/${process.env.REACT_APP_API_VERSION}/`;

export const urlAuthToken = `${urlBase}auth/token`;
export const urlUsers = `${urlBase}users`;
