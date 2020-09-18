import statusRoute from './status';

function configureRoute(route: { path: any; }) {
  const modifiedRoute = { ...route };
  // add v1 to all paths
  modifiedRoute.path = `/v1${route.path}`;
  return modifiedRoute;
}

export default []
  .concat(statusRoute)
  .map(configureRoute);
