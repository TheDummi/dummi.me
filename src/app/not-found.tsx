/** @format */

import { notFound } from 'next/navigation';

export default function NotFound() {
	return (
		<main>
			<center className="center">
				<h1 className="dots">Seems like nothing can be found here</h1>

				<span className="eyes"></span>
			</center>
			<center className="center">
				<a href=".">Go to home?</a>
			</center>
		</main>
	);
}
