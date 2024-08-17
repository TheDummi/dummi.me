/** @format */
'use client';
import DestinyTeamViewer from '@/components/DestinyTeamViewer';
import Loading from '@/components/Loading';
import { Suspense, useState, lazy } from 'react';

export default function Page() {
	const root = `https://www.bungie.net/Platform`;
	const APIKey = 'f045a47470ce4411a229c0bb336e6da7';
	const clientID = '38825';

	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const [user, setUser]: any = useState(null);
	const [users, setUsers]: any = useState([]);

	async function searchPlayer() {
		setError('');
		setUser(null);

		if (!name) return setError('Please enter a Bungie Display Name');

		const [displayName, displayNameCode] = name.split('#');

		const member = (
			await fetch(new URL(`${root}/Destiny2/SearchDestinyPlayerByBungieName/-1/`), {
				method: 'POST',
				headers: {
					'x-api-key': APIKey,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					displayName,
					displayNameCode,
				}),
			}).then((res) => res.json())
		)?.Response?.[0];

		if (!member) return setError(`Can't find player "${name}" in Bungie's database. Please check the name and try again`);

		async function f(url: string) {
			const response = await fetch(new URL(`${root}/${url}?components=100%2C200%2C1000%2C205`), {
				method: 'GET',
				headers: {
					'x-api-key': APIKey,
				},
			}).then((res) => res.json());

			return response?.Response || response;
		}

		if (member) {
			const { membershipType, membershipId } = member;

			const profile = await f(`Destiny2/${membershipType}/Profile/${membershipId}`);

			const characters = await Promise.all(Object.keys(profile.characters.data).map(async (id) => await f(`Destiny2/${membershipType}/Profile/${membershipId}/Character/${id}`)));

			const user = { ...profile, characters };

			console.log(user);

			setUser(user);
			setError('');
		}
	}

	return (
		<main>
			<center>
				<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Bungie Display Name (with tag)" />
				<button onClick={searchPlayer}>Search</button>
			</center>

			<Suspense fallback={<Loading />}>
				<DestinyTeamViewer user={user} error={error} users={users} />
			</Suspense>
		</main>
	);
}
