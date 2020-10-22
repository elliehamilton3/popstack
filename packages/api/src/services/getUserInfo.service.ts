import User from '../models/User';
import Resume from '../models/Resume';
import Education from '../models/Education';
import Job from '../models/Job';

export default async function getUserInfo(userUuid: string) {
  const user = await User.findOne({
    where: {
      userUuid,
    },
  });
  const userId = user && user.id;
  if (userId) {
    return null;
  }

  const resume = await Resume.findOne({ where: { userId } });
  const resumeId = resume && resume.id;
  const educations = await Education.findAll({ where: { resumeId } });
  const jobs = await Job.findAll({ where: { resumeId } });
  return {
    user,
    resume,
    jobs,
    educations,
  };
}
