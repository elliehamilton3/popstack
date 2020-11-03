import Boom from '@hapi/boom';
import { Request } from '@hapi/hapi';
import getUserInfo from '../../../services/getUserInfo.service';

export default async function getHandler(request: Request) {
  const { credentials: { sub: authId } } = request.auth as any;

  const userInfo = await getUserInfo(authId);
  if (!userInfo) {
    return Boom.unauthorized();
  }

  return userInfo;
}
