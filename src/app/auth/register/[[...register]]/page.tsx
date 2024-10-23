/** @format */

import { ClerkProvider, SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<main className="min-h-screen flex flex-col justify-center items-center">
			<SignUp />
		</main>
	);
}
