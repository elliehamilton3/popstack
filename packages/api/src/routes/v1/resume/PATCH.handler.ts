// import { Request } from '@hapi/hapi';
import Resume from '../../../models/Resume';
import User from '../../../models/User';
import Education from '../../../models/Education';
import Job from '../../../models/Job';

export default async function patchHandler({ payload }: any) {
  await User.update(payload, { where: { userUuid: '0001' } });
  const user = (await User.findOne({ where: { userUuid: '0001' } }));
  const userId = user && user.id;
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
