import * as React from 'react';
import { Page } from '../component/page/page.component';
import { useGlobalState } from '../store/appStore.store';

export const IndexView: React.FunctionComponent = () => {
  const [count, setCount] = useGlobalState('count');

  return (
    <Page>
      Index
      <hr />
      global.count=
      <button type="button" onClick={() => setCount(count + 1)}>{count}</button>
    </Page>
  );
};

export default IndexView;
