import Joi from '@hapi/joi';
import withPathPrefix from '../../../services/withPathPrefix.service';
import getHandler from './GET.handler';

export default [
  {
    method: 'GET',
    path: '',
    options: {
      auth: false,
      id: 'status',
      handler: getHandler,
      tags: ['api'],
      description:
        'Server health check, returns 200 if the server is running a-ok',
      response: {
        schema: Joi.object({
          version: Joi.string().description('The current server version running'),
        }).unknown(),
      },
    },
  },
].map(withPathPrefix('/status'));
