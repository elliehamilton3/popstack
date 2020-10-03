import Resume from '../../../models/Resume';
import User from '../../../models/User';
import Education from '../../../models/Education';
import Job from '../../../models/Job';

export default async function postHandler() {
  const user = await User.create({
    userUuid: '0001',
    authId: '0001',
    firstName: 'Example',
    lastName: 'Person',
    email: 'email@test.com',
    phoneNumber: '0123123123',
  });
  const userId = user && user.id;
  const resume = await Resume.create({
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae viverra leo, vitae elementum nibh. Vivamus et pharetra eros, sed blandit mauris.',
    title: 'Senior Person',
    location: 'Somewhere, Country',
    userId,
  });
  const resumeId = resume && resume.id;

  await Education.create({
    place: 'Secondary School',
    info: 'Skill A - 10',
    yearFrom: '2012',
    yearTo: '2015',
    resumeId,
  });

  await Education.create({
    place: 'University of Education',
    info: 'The Subject (Bachelor of School) - 2:1',
    yearFrom: '2015',
    yearTo: '2017',
    resumeId,
  });

  await Job.create({
    title: 'Junior Person',
    dateFrom: Date.now(),
    dateTo: Date.now(),
    company: 'Small Company',
    location: 'Somewhere, Country',
    description: 'Long description of role.',
    resumeId,
  });

  await Job.create({
    title: 'Mid-level Person',
    dateFrom: Date.now(),
    dateTo: Date.now(),
    company: 'Medium Company',
    location: 'Somewhere, Country',
    description: 'Long description of role.',
    resumeId,
  });

  return resume;
}
