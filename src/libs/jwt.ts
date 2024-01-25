import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = 'qiAVHK2ALdvPirji'; // NOT DO THIS IN PRODUCTION!

export function signJwt(payload: string | object | Buffer, options?: jwt.SignOptions) {
  return jwt.sign(payload, JWT_SECRET_KEY, options);
}

export function verifyJwt(token: string, options?: jwt.VerifyOptions) {
  return jwt.verify(token, JWT_SECRET_KEY, options);
}
