import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title }) => {
	return (
		<Wrapper>
			<div className="section-center">
				<Link to="/">home</Link>/ {title}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	width: 100%;
	display: flex;
	align-items: center;

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
