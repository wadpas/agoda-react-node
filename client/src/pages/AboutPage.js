import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-bcg.jpg'

const AboutPage = () => {
	return (
		<main>
			<PageHero title="about" />
			<Wrapper className="page section section-center">
				<img
					src={aboutImg}
					alt="about"
				/>
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
					</div>
					<p>
						Furniture refers to objects intended to support various human activities such as seating (e.g., stools,
						chairs, and sofas), eating (tables), storing items, working, and sleeping (e.g., beds and hammocks).
						Furniture is also used to hold objects at a convenient height for work (as horizontal surfaces above the
						ground, such as tables and desks), or to store things (e.g., cupboards, shelves, and drawers). Furniture can
						be a product of design and can be considered a form of decorative art. In addition to furniture's functional
						role, it can serve a symbolic or religious purpose. It can be made from a vast multitude of materials,
						including metal, plastic, and wood. Furniture can be made using a variety of woodworking joints which often
						reflects the local culture.
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`
export default AboutPage
