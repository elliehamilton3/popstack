import { Request } from '@hapi/hapi';
import { notFound } from '@hapi/boom';
import Resume from '../../../models/Resume';
import User from '../../../models/User';
import Education from '../../../models/Education';
import Job from '../../../models/Job';

export default async function getHandler(request: Request) {
  const { credentials: { sub: authId } } = request.auth as any;
  const user = (await User.findOne({ where: { authId } }));
  if (!user) return notFound();
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
