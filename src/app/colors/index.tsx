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
			className="w-full h-[100dvh] flex flex-col justify-center items-center gap-2"
		>
			{loading && <Skeleton className="w-32 h-16 rounded-lg" />}
			{colors &&
				colors?.length > 0 &&
				colors.map((color) => (
					<div
						key={color}
						className={`w-32 h-16 rounded-lg flex flex-col items-center justify-center`}
						style={{ background: color }}
					>
						{color}
					</div>
				))}
		</div>
	);
};

export default Colors;
