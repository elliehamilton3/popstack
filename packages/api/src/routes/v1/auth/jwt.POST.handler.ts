import { Request } from '@hapi/hapi';
import getUserJwt from '../../../services/getUserJwt.service';
import User from '../../../models/User';

export default async function postHandler(request: Request) {
  const { credentials } = request.auth as any;
  const { id: userId } = credentials;

  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  const token = getUserJwt(user);
  return {
    token,
  };
}
