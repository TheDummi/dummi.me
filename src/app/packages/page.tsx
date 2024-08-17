/** @format */
export default async function Page() {
	const root = `https://registry.npmjs.org/`;

	const packages = await fetch('https://api.github.com/users/TheDummi/repos').then((res) => res.json());

	const packs: any = [];

	packages
		.filter((x: any) => x.topics.includes('package'))
		.map(async (pkg: any) => {
			// const data = await fetch(String(root + pkg.name)).then((res) => res.json());

			// // console.log(data.Error);

			console.log(pkg);
		});

	console.log(packs);

	return (
		<>
			<main className="flex">
				<div className="sidebar">Packages</div>
				<div className="content">data</div>
			</main>
		</>
	);
}
