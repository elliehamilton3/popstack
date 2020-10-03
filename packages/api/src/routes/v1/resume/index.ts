import Joi from '@hapi/joi';
import withPathPrefix from '../../../services/withPathPrefix.service';
import withThrowFailAction from '../../../services/withThrowFailAction.service';

import postHandler from './POST.handler';
import getHandler from './GET.handler';
// import putHandler from './PUT.handler';
import patchHandler from './PATCH.handler';
// import deleteHandler from './DELETE.handler';

export default [
  {
    method: 'POST',
    path: '',
    options: {
      auth: false,
      id: 'POST/resume',
      handler: postHandler,
      tags: ['api'],
      description:
        'Create resume',
      // validate: {
      //   payload: Joi.object({}).unknown(),
      // },
    },
  },
  {
    method: 'GET',
    path: '/{resumeId}',
    options: {
      auth: false,
      id: 'GET/resume/{resumeId}',
      handler: getHandler,
      tags: ['api'],
      description:
        'Get resume info by resumeId',
      validate: {
        params: Joi.object({}).unknown(),
      },
    },
  },
  // {
  //   method: 'PUT',
  //   path: '/{resumeId}',
  //   options: {
  //     auth: false,
  //     id: 'PUT/resume/{resumeId}',
  //     handler: putHandler,
  //     tags: ['api'],
  //     description:
  //       'Put resume info by resumeId',
  //     validate: {
  //       params: Joi.object({}).unknown(),
  //       payload: Joi.object({}).unknown(),
  //     },
  //   },
  // },
  {
    method: 'PATCH',
    path: '/{resumeId}',
    options: {
      auth: false,
      id: 'PATCH/resume/{resumeId}',
      handler: patchHandler,
      tags: ['api'],
      description:
        'Patch resume info by resumeId',
      validate: {
        payload: Joi.object({
          firstName: Joi.string().allow(''),
          lastName: Joi.string().allow(''),
          email: Joi.string().allow(''),
          phoneNumber: Joi.number().allow(''),
          title: Joi.string().allow(''),
          bio: Joi.string().allow(''),
        }),
      },
    },
  },
  // {
  //   method: 'DELETE',
  //   path: '/{resumeId}',
  //   options: {
  //     auth: false,
  //     id: 'DELETE/resume/{resumeId}',
  //     handler: deleteHandler,
  //     tags: ['api'],
  //     description:
  //       'Delete resume info by resumeId',
  //     validate: {
  //       params: Joi.object({}).unknown(),
  //     },
  //   },
  // },
].map(withPathPrefix('/resume')).map(withThrowFailAction);
