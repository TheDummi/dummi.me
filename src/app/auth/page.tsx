/** @format */

import { config } from 'dotenv';
import axios from 'axios';
import url from 'url';

config();

export default async function Home(request: any) {
	const code = request.searchParams.code;

	if (!code) return;

	console.log(`Successfully authorized with code: ${code}`);

	const formData = new url.URLSearchParams({
		client_id: process.env.ClientId as string,
		client_secret: process.env.ClientSecret as string,
		grant_type: 'authorization_code',
		code: code.toString(),
		redirect_uri: 'https://www.xernerx.xyz/auth',
	});

	console.log('Requesting token from Discord...');

	const output = await axios.post('https://discord.com/api/v10/oauth2/token', formData, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	console.log(`Successfully authorized with token: ${output.data.acccess_token}`);

	let token = output.data.access_token;

	const user = await axios.get('https://discord.com/api/v10/users/@me', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const guilds = await axios.get('https://discord.com/api/v10/users/@me/guilds', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	console.log(user.data);

	if (code) {
		const refreshFormData = new url.URLSearchParams({
			client_id: process.env.ClientId as string,
			client_secret: process.env.ClientSecret as string,
			grant_type: 'refresh_token',
			refresh_token: output.data.refresh_token,
		});

		console.log('Requesting token from Discord...');

		const refresh = await axios.post('https://discord.com/api/v10/oauth2/token', refreshFormData, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		token = refresh.data.access_token;

		console.log(`https://cdn.discordapp.com/avatars/${user.data.id}/${user.data.avatar}.webp`, 'https://cdn.discordapp.com/icons/${g.id}/${g.icon}.webp');
	}
	return (
		<main>
			<center>
				<h1>Successfully logged in as {user.data.username}!</h1>
			</center>
			<div className="id-card" style={{ background: user.data.banner_color }}>
				<div className="relative">
					<img className="rounded-full icon absolute bottom-0" src={`https://cdn.discordapp.com/avatars/${user.data.id}/${user.data.avatar}.webp`}></img>
					<img className="rounded banner" src={`https://cdn.discordapp.com/banners/${user.data.id}/${user.data.banner}.webp`}></img>
				</div>
				<h3>About you</h3>
				<p>
					{user.data.username} | {user.data.username}#{user.data.discriminator}
				</p>
				<p>{user.data.id}</p>
				<p>{user.data.email}</p>
				<p>{user.data.verified}</p>
				<p>{user.data.mfa_enabled}</p>
				<p>{user.data.locale}</p>
				<p>{user.data.flags}</p>
				<p>{user.data.premium_type}</p>
				<p>{user.data.public_flags}</p>
				<p>{user.data.bot}</p>
				<p>{user.data.system}</p>
			</div>

			<h2>Your Servers</h2>
			<div className="grid-list">
				{guilds.data.map((g: any) => (
					<div className="grid-item">
						<center>
							<img className="rounded-full icon" src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}.webp`}></img>

							<p>{g.name}</p>
						</center>
					</div>
				))}
			</div>
		</main>
	);
}
