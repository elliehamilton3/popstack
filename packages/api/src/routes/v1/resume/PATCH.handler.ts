// import { Request } from '@hapi/hapi';
import Resume from '../../../models/Resume';
import User from '../../../models/User';
import Education from '../../../models/Education';
import Job from '../../../models/Job';

export default async function patchHandler({ payload }: any) {
  await User.update({
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
  }, { where: { userUuid: '0001' } });
  const user = (await User.findOne({ where: { userUuid: '0001' } }));
  const userId = user && user.id;

  await Resume.update({
    title: payload.title,
  }, { where: { userId } });
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
