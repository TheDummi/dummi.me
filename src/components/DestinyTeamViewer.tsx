/** @format */
const root = `https://www.bungie.net`;
const APIKey = 'f045a47470ce4411a229c0bb336e6da7';

export default function DestinyTeamViewer({ user, error, users }: { user: any; error: string; users: Array<typeof user> }) {
	async function f(url: string) {
		const response = await fetch(new URL(`${root}/${url}?components=100%2C200%2C1000%2C205`), {
			method: 'GET',
			headers: {
				'x-api-key': APIKey,
			},
		}).then((res) => res.json());

		return response?.Response || response;
	}

	if (error) return <center>{error && <div className="error">{error}</div>}</center>;

	console.log(user);

	if (user) {
		const characters = user?.characters.map(({ character, equipment }: any) => character.data);

		return (
			<div className="profile-card">
				{user.profile.data.userInfo.bungieGlobalDisplayName}#{user.profile.data.userInfo.bungieGlobalDisplayNameCode}
				{characters.map((character: any) => (
					<img src={root + character.emblemBackgroundPath}></img>
				))}
			</div>
		);
	}
}
