import Resume from '../../../models/Resume';

export default async function getHandler() {
  const resumes = await Resume.findAll();
  return resumes;
}
