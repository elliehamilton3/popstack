import withPathPrefix from '../../services/withPathPrefix.service';
import resumeRoutes from './resume';
import statusRoute from './status';
import usersRoutes from './users';
import authRoutes from './auth';

export default []
  .concat(resumeRoutes)
  .concat(statusRoute)
  .concat(usersRoutes)
  .concat(authRoutes)
  .map(withPathPrefix('/v1'));
