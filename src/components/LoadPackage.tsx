/** @format */

'use client';

import { useState } from 'react';
import Package from './Package';

export default function LoadPackage({ packages }: { packages: any }) {
	const [pkg, setPkg]: any = useState(null);

	function loadPackage(e: any) {
		setPkg(packages.find((pkg: any) => pkg._id === e.target.id));
	}

	return (
		<>
			<main className="flex">
				<div className="sidebar">
					{packages.map((pkg: any) => (
						<a key={pkg._id} id={pkg._id} href={`#${pkg.name}`} onClick={loadPackage}>
							{pkg.name}
						</a>
					))}
				</div>
				<div className="content">
					{pkg ? <Package pkg={pkg} /> : 'Select a package!'}
					<div className="mob-disclaimer">You are viewing this page on a phone, readme will not be loaded, you can use github or npm to read it from the package info.</div>
				</div>
			</main>
		</>
	);
}
