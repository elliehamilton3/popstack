import withPathPrefix from '../../../services/withPathPrefix.service';

import postJwtHandler from './jwt.POST.handler';
import postAuth0Handler from './auth0.POST.handler';

export default [
  {
    method: 'POST',
    path: '/jwt',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
      id: 'POST/auth/jwt',
      handler: postJwtHandler,
      tags: ['api'],
      description:
        'Refresh JWT',
    },
  },
  {
    method: 'POST',
    path: '/auth0',
    options: {
      auth: {
        strategy: 'auth0.jwt',
        mode: 'required',
      },
      id: 'POST/auth/auth0',
      handler: postAuth0Handler,
      tags: ['api'],
      description:
        'Exchange Auth0 JWT',
    },
  },
].map(withPathPrefix('/auth'));
