/** @format */

import { SignIn } from '@clerk/nextjs';

export default async function Page() {
	return (
		<main className="min-h-screen flex flex-col justify-center items-center">
			<SignIn />
		</main>
	);
}
