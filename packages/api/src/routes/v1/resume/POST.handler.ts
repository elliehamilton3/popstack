import { Request } from '@hapi/hapi';
import { v4 as uuidv4 } from 'uuid';
import Resume from '../../../models/Resume';
import User from '../../../models/User';

export default async function postHandler(request: Request) {
  const { credentials: { sub: authId } } = request.auth as any;
  const user = (await User.findOne({ where: { authId } }));
  let newUser;
  if (!user) {
    try {
      newUser = await User.create({
        userUuid: uuidv4(),
        authId,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    } catch (err) {
      console.log(err);
    }
  }
  const userId = newUser && newUser.id;
  const resume = await Resume.create({
    bio: '',
    title: '',
    location: '',
    userId,
  });

  return resume;
}
