export default (prefix: string) => (route: { path: any; }) => {
  const modifiedRoute = { ...route };
  modifiedRoute.path = `${prefix}${route.path}`;
  return modifiedRoute;
};
