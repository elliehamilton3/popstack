let environment = process.env;
if (process.env.DOCKEST_ATTACH_TO_PROCESS) {
  // eslint-disable-next-line no-useless-catch
  try {
    const dockestConfig = JSON.parse(process.env.DOCKEST_ATTACH_TO_PROCESS);
    environment = dockestConfig.services.backend.environment;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  username: environment.PGUSER,
  password: environment.PGPASSWORD,
  database: environment.PGDATABASE,
  host: environment.PGHOST,
  models: [`${__dirname}/../src/models`],
  dialect: 'postgres',
};
