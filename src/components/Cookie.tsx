/** @format */
import { cookies } from 'next/headers';

export default function Cookie({ key, value }: { key: string; value: string }) {
	const cookie = cookies();

	console.log(key, value);

	cookie.set(key, value);

	return <main>hi</main>;
}
