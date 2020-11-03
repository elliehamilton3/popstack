import Joi from '@hapi/joi';
import withPathPrefix from '../../../services/withPathPrefix.service';

import getHandler from './GET.handler';

export default [
  {
    method: 'GET',
    path: '/{userUuid}',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
      id: 'GET/users/{userUuid}',
      handler: getHandler,
      tags: ['api'],
      description:
        'Get user info by userUuid',
      validate: {
        params: Joi.object({
          userUuid: Joi.string().regex(/^[. |_a-zA-Z0-9]+$/).required(),
        }),
      },
    },
  },
].map(withPathPrefix('/users'));
