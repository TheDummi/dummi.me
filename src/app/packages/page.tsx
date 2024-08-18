/** @format */

import LoadPackage from '@/components/LoadPackage';

export default async function Page() {
	const root = `https://registry.npmjs.org/`;

	const packages = await Promise.all(
		(
			await fetch('https://api.github.com/users/TheDummi/repos').then((res) => res.json())
		)
			.filter((x: any) => x.topics.includes('package'))
			.map(async (pkg: any) => {
				const data = await fetch(String(root + pkg?.name)).then((res) => res.json());

				if (data) return data;
			})
			.filter((x: any) => x)
			.sort((a: any, b: any) => a.name - b.name)
	);

	return <LoadPackage packages={packages} />;
}
