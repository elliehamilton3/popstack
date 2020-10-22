import Boom from '@hapi/boom';
import { Request } from '@hapi/hapi';
import getUserInfo from '../../../services/getUserInfo.service';

export default async function getHandler(request: Request) {
  const userUuidParam = request.params.userUuid;
  const { credentials } = request.auth as any;
  const userUuid = userUuidParam === 'me' ? credentials.userUuid : userUuidParam;

  if (userUuid !== credentials.userUuid) {
    return Boom.unauthorized();
  }

  const user = await getUserInfo(userUuid);
  if (!user) {
    return Boom.notFound();
  }

  return {
    user,
  };
}
