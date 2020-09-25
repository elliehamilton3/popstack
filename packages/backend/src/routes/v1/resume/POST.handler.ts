import Resume from '../../../models/Resume';

export default async function postHandler() {
  await Resume.create({ bio: 'about me blah balc' });

  return {};
}
