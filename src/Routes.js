import Home from './Home';
import Login from './Login';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Subpage1 from './pages/subpages/Subpage1';
import Subpage2 from './pages/subpages/Subpage2';
import Portal from './portal/Portal';
import NotFound from './NotFound';

const routes = [
	{
		path: '/',
		component: Portal,
		routes: [
			{
				path: '/login',
				exact: true,
				component: Login,
			},
			{
				path: '/home',
				component: Home,
				routes: [
					{
						// Similar to path: '/'
						// it contains the Route Component which is why, we did not add
						// the co-child NotFound Route as seen in line 51 of Route.js
						path: '/home/page1',
						component: Page1,
						routes: [
							{
								path: '/home/page1/subpage1',
								exact: true,
								component: Subpage1,
							},
							{
								path: '/home/page1/subpage2',
								exact: true,
								component: Subpage2,
							},
						],
					},
					{
						path: '/home/page2',
						exact: true,
						component: Page2,
					},
					// Add this if a co-child does have a child of its own
					// /home/page1 has his own child
					{
						path: '*',
						exact: true,
						component: NotFound
					}
				],
			}
		]
	}
];

export default routes;
