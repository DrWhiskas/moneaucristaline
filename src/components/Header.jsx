import React, { useState } from 'react';
import '../styles/header.css';

export default function Header() {
	const [showLinks, setShowLinks] = useState(false);
	function handleShowLinks() {
		setShowLinks(!showLinks);
	}

	const HeaderLink = ({ text, link, style }) => {
		return (
			<li>
				<a className={`header__nav__link blue ${style}`} href={link}>
					{text}
				</a>
			</li>
		);
	};
	return (
		<header className={showLinks ? 'header show-header' : 'header'}>
			<img
				src="https://www.moneaucristaline.fr/wp-content/themes/cristaline/img/logo-cristaline.svg"
				alt="Logo Cristaline"
				className="header__logo"
			/>
			<ul className="header__nav">
				<HeaderLink style="header__accueil" text="ACCUEIL" link="/home" />
				<HeaderLink text="LA MARQUE" link="#" />
				<HeaderLink text="ORIGINE ET SOURCES" link="#" />
				<li>
					<a className="header__nav__link mobile-logo" href="#">
						<img
							src="https://www.moneaucristaline.fr/wp-content/themes/cristaline/img/logo-cristaline.svg"
							alt="Logo Cristaline"
							className="header__nav__link__logo"
						/>
					</a>
				</li>
				<HeaderLink text="NOS PRODUITS" link="#" />
				<HeaderLink text="NOS ENGAGEMENTS" link="#" />
			</ul>
			<button className="header__burger" onClick={handleShowLinks}>
				<span className="burger-bar"></span>
			</button>
		</header>
	);
}
