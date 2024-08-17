/** @format */

import Markdown from 'markdown-to-jsx';

export default function Package({ pkg }: { pkg: any }) {
	const versions = Object.values(pkg.versions).map((pkg: any) => (
		<a key={pkg.version} href={`https://www.npmjs.com/package/${pkg.name}/v/${pkg.version}`}>
			{pkg.version}
		</a>
	));

	const date = new Date(pkg.time.modified);

	return (
		<>
			<h1>{pkg.name}</h1>

			<div className="flex">
				<div className="readme">
					<Markdown>{pkg.readme}</Markdown>
				</div>

				<div className="pkg-info">
					<h3>Package Info</h3>
					<table>
						<tr>
							<th>Name</th>
							<td>{pkg.name}</td>
						</tr>
						<tr>
							<th>Version</th>
							<td>{pkg['dist-tags'].latest}</td>
						</tr>
						<tr>
							<th>Updated</th>
							<td>
								{date.toLocaleDateString()} at {date.toLocaleTimeString()}
							</td>
						</tr>
						<tr>
							<th>Author</th>
							<td>{pkg.author.name}</td>
						</tr>
						<tr>
							<th>License</th>
							<td>{pkg.license}</td>
						</tr>
					</table>
					<p>
						<h4>Description</h4>
						{pkg.description}
					</p>

					<p className="flex">
						<a href={`https://github.com/TheDummi/${pkg.name}`} target="_blank">
							<img src={'icons/github.png'} className="link-icon"></img>
						</a>
						<a href={`https://www.npmjs.com/package/${pkg.name}`} target="_blank">
							<img src={'icons/npm.png'} className="link-icon"></img>
						</a>
					</p>
					<br></br>
					<p>
						<h4>Version History</h4>

						{versions.map((v) => (
							<>
								- {v}
								<br></br>
							</>
						))}
					</p>
				</div>
			</div>
		</>
	);
}
