import Joi from '@hapi/joi';
import getHandler from './GET.handler';

export default [
  {
    method: 'GET',
    path: '/status',
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
];
