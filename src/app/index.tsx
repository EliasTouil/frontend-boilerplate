import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function App() {
	return (
		<main>
			<nav>
				<Link to={'colors'}>Go to colors page</Link>
			</nav>
			<div className="w-full h-[100dvh] flex justify-center items-center">
				<Button data-testid="say-hello" onClick={() => alert('hello world')}>
					Say hello
				</Button>
			</div>
		</main>
	);
}

export default App;
