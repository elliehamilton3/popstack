import { Server } from '@hapi/hapi';
import v1Routes from './routes/v1';

const init = async () => {
  const server: Server = new Server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
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
