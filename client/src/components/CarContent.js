import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
	const { cart } = useCartContext()
	return (
		<Wrapper className="section-center">
			<CartColumns />
			{cart.map((item) => {
				return (
					<CartItem
						key={item.id}
						{...item}
					/>
				)
			})}
			<CartTotals />
		</Wrapper>
	)
}
const Wrapper = styled.section`
	.link-container {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
	}
	.link-btn {
		background: transparent;
		border-color: transparent;
		text-transform: capitalize;
		padding: 0.25rem 0.5rem;
		color: var(--clr-white);
		background: var(--clr-primary);
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		font-weight: 400;
		cursor: pointer;
	}
	.clear-btn {
		background: var(--clr-black);
	}
`
export default CartContent
