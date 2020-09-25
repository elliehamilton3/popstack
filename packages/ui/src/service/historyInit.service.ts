import { createBrowserHistory, History } from 'history';

export const historyInit = (): History => {
  const browserHistory = createBrowserHistory();

  return browserHistory;
};

export default historyInit;
