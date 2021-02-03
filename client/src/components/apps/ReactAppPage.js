import { useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundry from '../../utilities/ErrorBoundry';
import reactAppList from './reactAppList';

let App = null;

const ReactAppPage = () => {

  let {app} = useParams();

  app = app.charAt(0).toUpperCase() + app.slice(1);

  useEffect(() => {
  }, []);

  if (!reactAppList.includes(app)) return null;

  App = lazy(() => import(`../react apps/${app}/App`));

  return (
    <div className="APP-master-container">
      <div className="APP-flex-container">
        <ErrorBoundry>
          <Suspense fallback={<>loading</>}>
            <App />
          </Suspense>
        </ErrorBoundry>
      </div>
    </div>
  )
}

export default ReactAppPage;
