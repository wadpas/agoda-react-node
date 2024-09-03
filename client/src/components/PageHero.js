import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = () => {
	return <h4>page hero</h4>
}

const Wrapper = styled.section`
	background: var(--clr-primary0);
	width: 100%;
	min-height: 20vh;
	display: flex;
	align-items: center;

	color: var(--clr-primary);
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
