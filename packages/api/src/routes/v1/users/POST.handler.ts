import { Request } from '@hapi/hapi';
import { v4 as uuidv4 } from 'uuid';
import User from '../../../models/User';

export default async function getHandler(request: Request) {
  const { credentials: { sub: authId } } = request.auth as any;
  console.log(request.auth.credentials);

  const user = (await User.findOne({ where: { authId } }));
  if (!user) {
    await User.create({
      userUuid: uuidv4(),
      authId,
      firstName: 'Example',
      lastName: 'Person',
      email: 'email@test.com',
      phoneNumber: '0123123123',
    });
  }

  return 201;
}
