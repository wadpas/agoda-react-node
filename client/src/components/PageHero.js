import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
	return (
		<Wrapper>
			<div className="section-center">
				<Link to="/">home</Link>
				{product && <Link to="/products">/ products</Link>}/ {title}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	margin-left: -1rem;

	a {
		color: var(--clr-primary);
		padding: 0.5rem;
		transition: var(--transition);
	}
	a:hover {
		color: var(--clr-primary);
	}
`

export default PageHero
