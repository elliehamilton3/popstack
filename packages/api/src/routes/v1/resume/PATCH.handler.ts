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
    bio: payload.bio,
  }, { where: { userId } });
  const resume = await Resume.findOne({ where: { userId } });
  const resumeId = resume && resume.id;

  await Education.destroy({ where: { resumeId } });

  payload.educations.forEach(async (education: any, i: number) => {
    if (i === payload.jobs.length - 1) return;
    await Education.create({
      info: education.info,
      place: education.place,
      yearFrom: 2000,
      yearTo: 2000,
      resumeId,
    });
  });
  const educations = await Education.findAll({ where: { resumeId } });

  await Job.destroy({ where: { resumeId } });

  payload.jobs.forEach(async (job: any, i: number) => {
    if (i === payload.jobs.length - 1) return;
    await Job.create({
      title: job.title,
      company: job.company,
      dateFrom: Date.now(),
      dateTo: Date.now(),
      location: job.location,
      description: job.description,
      resumeId,
    });
  });
  const jobs = await Job.findAll({ where: { resumeId } });

  return {
    user,
    resume,
    jobs,
    educations,
  };
}
