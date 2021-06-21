import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';

const NotFound = () => {
	let location = useLocation();
	 
	return (
		<>
			{location.pathname !== '/404' ? <Redirect to="/404"/> : console.log('Something went wrong.')}
			<div className='login'>
				<h1 className='text-center'>
					😰
					<br />
					404 Not Found
				</h1>
			</div>
		</>
	);
};

export default NotFound;
