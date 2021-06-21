import { Switch, Link, Route, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../utils/RouteWithSubRoutes';
import NotFound from '../NotFound';

const Portal = ({ routes }) => {

	return (
		<>
				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
                    <Route component={NotFound} />
				</Switch>
		</>
	);
};

export default Portal;
