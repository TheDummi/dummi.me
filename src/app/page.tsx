/** @format */
export default function Home() {
	return (
		<main>
			<center className="rb" id="page-title">
				<h1>Welcome to dummi.me</h1>
			</center>
			<div className="content">
				<div>
					<h2>Development</h2>
					<div className="grid-list">
						<a href="/packages" className="tile">
							NPM packages
						</a>

						<a href="/xernerx" className="tile">
							Xernerx
						</a>

						<a href="/portal" className="tile">
							Portal
						</a>
					</div>
				</div>
				<div>
					<h2>Games</h2>
					<div className="grid-list">
						<a href="/destiny" className="tile">
							Destiny
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
