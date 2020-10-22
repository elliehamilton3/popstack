import { sign } from 'jsonwebtoken';
import User from '../models/User';

export default function getUserJwt(user: User, options?: {
  privateKey?: string;
  expiresIn?: string;
}) {
  return sign({
    id: user.id,
    userUuid: user.userUuid,
  },
  (options && options.privateKey) || process.env.AUTH_PRIVATEKEY,
  {
    expiresIn: (options && options.expiresIn) || '1 day',
  });
}
