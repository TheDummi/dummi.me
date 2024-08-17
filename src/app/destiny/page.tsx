/** @format */
'use client';
import { useState } from 'react';

export default function Page() {
	const root = `https://www.bungie.net/Platform`;
	const APIKey = 'f045a47470ce4411a229c0bb336e6da7';
	const clientID = '38825';

	const [name, setName] = useState('');
	const [user, setUser]: any = useState(null);

	async function searchPlayer() {
		if (!name) return;

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

		if (member) {
			const { membershipType, membershipId } = member;

			const user = (
				await fetch(new URL(`${root}/Destiny2/${membershipType}/Profile/${membershipId}/?components=100%2C200%2C1000%2C205`), {
					method: 'GET',
					headers: {
						'x-api-key': APIKey,
					},
				}).then((res) => res.json())
			)?.Response;

			setUser(user);
			console.log(user);
		}
	}

	return (
		<main>
			<center>
				<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Bungie Display Name (with tag)" />
				<button onClick={searchPlayer}>Search</button>
			</center>

			{user && (
				<div className="profile-card">
					{user.profile.data.userInfo.bungieGlobalDisplayName}#{user.profile.data.userInfo.bungieGlobalDisplayNameCode}
				</div>
			)}
		</main>
	);
}

function getUser(displayName: string) {}
