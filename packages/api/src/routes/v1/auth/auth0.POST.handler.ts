import { Request } from '@hapi/hapi';
import getOrCreateUserFromAuth0Id from '../../../services/getOrCreateUserFromAuth0Id.service';
import getUserJwt from '../../../services/getUserJwt.service';

export default async function postHandler(request: Request) {
  const { credentials } = request.auth as any;

  const user = await getOrCreateUserFromAuth0Id(credentials.sub);

  const token = getUserJwt(user);
  return {
    token,
  };
}
