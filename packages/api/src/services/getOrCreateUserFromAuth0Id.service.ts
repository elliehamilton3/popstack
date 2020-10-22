import { v4 as uuid } from 'uuid';
import User from '../models/User';

export default async function getOrCreateUserFromAuth0Id(auth0Id: string) {
  const existingUser = await User.findOne({
    where: {
      auth0Id,
    },
  });
  if (existingUser) return existingUser;

  const newUser = await User.create({
    userUuid: uuid(),
    auth0Id,
  });
  return newUser;
}
