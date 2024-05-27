import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function App() {
	return (
		<main>
			<nav>
				<Link to={'colors'}>Go to colors page</Link>
			</nav>
			<div className="flex h-dvh w-full items-center justify-center">
				<Button data-testid="say-hello" onClick={() => alert('hello world')}>
					Say hello
				</Button>
			</div>
		</main>
	);
}

export default App;
