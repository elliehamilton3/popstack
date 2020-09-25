import withPathPrefix from '../../services/withPathPrefix.service';
import resumeRoutes from './resume';
import statusRoute from './status';

export default []
  .concat(resumeRoutes)
  .concat(statusRoute)
  .map(withPathPrefix('/v1'));
