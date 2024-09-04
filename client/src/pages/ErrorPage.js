import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
	return (
		<Wrapper className="page">
			<div>
				<h1>404</h1>
				<h3>Sorry, the page you tried cannot be found</h3>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.main`
	display: flex;
	margin-top: 1.5rem;
	justify-content: center;
	align-items: center;
	text-align: center;
	h1 {
		font-size: 10rem;
	}
	h3 {
		text-transform: none;
		margin-bottom: 2rem;
	}
`

export default ErrorPage
