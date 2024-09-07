import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars = [], reviews }) => {
	return (
		<Wrapper>
			<div>
				{[...Array(Math.floor(stars))].map((_, index) => (
					<BsStarFill key={index} />
				))}
				{stars % 1 !== 0 && <BsStarHalf />}
			</div>
			<p className="reviews">({reviews} customer reviews)</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	color: var(--clr-primary);
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`
export default Stars
