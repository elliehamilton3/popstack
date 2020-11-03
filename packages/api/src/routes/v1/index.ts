import withPathPrefix from '../../services/withPathPrefix.service';
import resumeRoutes from './resume';
import statusRoute from './status';
import usersRoutes from './users';

export default []
  .concat(resumeRoutes)
  .concat(statusRoute)
  .concat(usersRoutes)
  .map(withPathPrefix('/v1'));
