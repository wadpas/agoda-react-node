import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
	const { total_amount, shipping_fee } = useCartContext()
	const { myUser } = useUserContext()
	return (
		<Wrapper>
			<article>
				<h4>Cart Totals</h4>
				<h5>
					Total: <span>{formatPrice(total_amount)}</span>
				</h5>
				<p>
					Shipping Fee: <span>{formatPrice(shipping_fee)}</span>
				</p>
				<h5>
					Order Total: <span>{formatPrice(total_amount + shipping_fee)}</span>
				</h5>
				{myUser ? (
					<Link
						to="/checkout"
						className="btn">
						Proceed to Checkout
					</Link>
				) : (
					<Link
						to="/login"
						className="btn">
						Login to Checkout
					</Link>
				)}
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	margin-top: 3rem;
	display: flex;
	justify-content: center;
	article {
		border: 1px solid var(--clr-grey-8);
		border-radius: var(--radius);
		padding: 3rem;
	}
	h4,
	h5,
	p {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
	p {
		text-transform: capitalize;
	}

	@media (min-width: 776px) {
		justify-content: flex-end;
	}
	.btn {
		width: 100%;
		margin-top: 1rem;
		text-align: center;
		font-weight: 700;
	}
`

export default CartTotals
