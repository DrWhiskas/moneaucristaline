import React from "react";
import '../styles/hero.css'
export default function Hero(){
    return (
			<section className="hero">
				<h1 className="hero__text segoe">L'eau préférée  des français !</h1>

				<div className="hero__links">
					<a className="hero__button button-produits" href="#">
						Nos produits
					</a>
					<a className="hero__button button-decouvrir" href="#">
						Nous Découvrir
					</a>
				</div>
			</section>
		);
}