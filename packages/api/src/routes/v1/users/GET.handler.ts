import Boom from '@hapi/boom';
import { Request } from '@hapi/hapi';
import getUserInfo from '../../../services/getUserInfo.service';

export default async function getHandler(request: Request) {
  // const userUuidParam = request.params.userUuid;
  // const { credentials } = request.auth as any;
  console.log(request.auth);
  // const userUuid = userUuidParam === 'me' ? credentials.userUuid : userUuidParam;

  // if (userUuid !== credentials.userUuid) {
  //   return Boom.unauthorized();
  // }

  const userInfo = await getUserInfo('0001');
  if (!userInfo) {
    return Boom.notFound();
  }

  return userInfo;
}
