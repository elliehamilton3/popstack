import { Server } from '@hapi/hapi';
import jwksRsa from 'jwks-rsa';
import v1Routes from './routes/v1';
import sequelize from './sequelize';

const hapiAuthJWT = require('hapi-auth-jwt2');

const init = async () => {
  await sequelize.sync();
  const server: Server = new Server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0',

    routes: {
      cors: {
        origin: ['*'],
        headers: ['Authorization', 'Content-Type', 'X-Referrer'],
        exposedHeaders: ['Accept'],
        additionalExposedHeaders: ['Accept'],
        maxAge: 60,
        credentials: false,
      },
    },
  });
  await server.register(hapiAuthJWT);

  server.auth.strategy('jwt', 'jwt', {
    complete: true,
    key: process.env.AUTH_PRIVATEKEY,
    validate: (decoded: any) => ({
      isValid: !!(decoded && decoded.userUuid),
      credentials: {
        ...decoded,
      },
    }),
  });

  server.auth.strategy('auth0.jwt', 'jwt', {
    complete: true,
    key: jwksRsa.hapiJwt2KeyAsync({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    verifyOptions: {
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      algorithms: ['RS256'],
    },
    validate: (decoded: any) => ({
      isValid: !!(decoded && decoded.sub),
      credentials: {
        ...decoded,
      },
    }),
  });

  await server.route([].concat(v1Routes));
  await server.start();
  // eslint-disable-next-line no-console
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  process.exit(1);
});

init();
