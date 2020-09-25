import { Request } from '@hapi/hapi';
import packageJson from '../../../../package.json';

export default async function getHandler(request: Request) {
  request.log(['debug'], 'in server status handler');
  try {
    return { version: packageJson.version };
  } catch (err) {
    request.log(['error'], err);
    return err;
  }
}
