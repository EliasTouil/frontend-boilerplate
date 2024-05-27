import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';

const Colors = () => {
	const [loading, setLoading] = useState(true);
	const [colors, setColors] = useState<string[] | null>(null);
	const [error, setError] = useState<Error | null>();

	useEffect(() => {
		axios
			.get('https://random-flat-colors.vercel.app/api/random', {
				params: { count: 5 }
			})
			.then(({ data }) => {
				setColors(data.colors);
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				setError(e);
			});
	}, []);

	if (!!error) {
		return (
			<div data-testid="colors-error" className="bg-red-100">
				Sowwy, {error.message}
			</div>
		);
	}

	return (
		<div
			data-testid="colors-container"
			className="flex h-dvh w-full flex-col items-center justify-center gap-2"
		>
			{loading && <Skeleton className="h-16 w-32 rounded-lg" />}
			{colors &&
				colors?.length > 0 &&
				colors.map((color) => (
					<div
						key={color}
						className={`flex h-16 w-32 flex-col items-center justify-center rounded-lg`}
						style={{ background: color }}
					>
						{color}
					</div>
				))}
		</div>
	);
};

export default Colors;
