import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
	const { closeSidebar } = useProductsContext()
	const { total_items } = useCartContext()
	const { loginWithRedirect, logout, myUser } = useUserContext()

	return (
		<Wrapper className="cart-btn-wrapper">
			<Link
				to="/cart"
				className="cart-btn"
				onClick={closeSidebar}>
				cart
				<div className="cart-container">
					<FaShoppingCart />
					<div className="cart-value">{total_items}</div>
				</div>
			</Link>
			<button
				type="button"
				className="auth-btn"
				onClick={loginWithRedirect}>
				login
				<FaUserPlus />
			</button>
			<button
				type="button"
				className="auth-btn"
				onClick={() => {
					logout({
						returnTo: window.location.origin,
					})
				}}>
				logout
				<FaUserMinus />
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 225px;

	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.25rem;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		display: flex;
		align-items: center;
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.6rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--clr-primary);
		color: var(--clr-white);
		border-radius: 50%;
		font-size: 0.75rem;
		padding: 12px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.25rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		svg {
			margin-left: 5px;
		}
	}
`
export default CartButtons
