import { ServerRoute, ResponseToolkit, Request } from '@hapi/hapi';
import { ValidationOptions } from '@hapi/joi';
import * as Boom from '@hapi/boom';

export default (route: ServerRoute) => {
  const modifiedRoute = { ...route };

  modifiedRoute.options = modifiedRoute.options || {};

  if (typeof modifiedRoute.options === 'object') {
    modifiedRoute.options.validate = modifiedRoute.options.validate || {};
    modifiedRoute.options.validate.options = modifiedRoute.options.validate.options || {};

    modifiedRoute.options.validate.failAction = async (
      request: Request,
      h: ResponseToolkit,
      err?: any) => {
      if (err.isJoi) {
        const errorMessage = Boom.badRequest(err.message);
        (errorMessage.output.payload as any).details = err.details;

        return errorMessage;
      }

      throw err;
    };

    (modifiedRoute.options.validate.options as ValidationOptions).abortEarly = false;
  }

  return modifiedRoute;
};
