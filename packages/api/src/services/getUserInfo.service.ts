import User from '../models/User';
import Resume from '../models/Resume';

export default async function getUserInfo(userUuid: string) {
  const user = await User.findOne({
    where: {
      userUuid,
    },
  });
  const userId = user && user.id;
  if (!userId) {
    return null;
  }

  const resumes = await Resume.findAll({ where: { userId } });
  return {
    user,
    resumes,
  };
}
