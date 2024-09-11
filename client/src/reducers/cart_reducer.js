import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from '../actions'

const cart_reducer = (state, action) => {
	if (action.type === ADD_TO_CART) {
		const { id, color, amount, product } = action.payload
		let tempCart = state.cart.find((item) => item.id === id + color)
		if (tempCart) {
			tempCart = [...state.cart]
			tempCart.find((item) => item.id === id + color).amount += amount
		} else {
			const newItem = {
				id: id + color,
				name: product.name,
				color,
				amount,
				image: product.images[0].url,
				price: product.price,
				max: product.stock,
			}
			tempCart = [...state.cart, newItem]
		}
		return { ...state, cart: tempCart }
	}

	if (action.type === REMOVE_CART_ITEM) {
		const tempCart = state.cart.filter((item) => item.id !== action.payload)
		return { ...state, cart: tempCart }
	}

	if (action.type === CLEAR_CART) {
		return { ...state, cart: [] }
	}

	if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
		const { id, value } = action.payload
		const tempCart = state.cart
			.map((item) => {
				if (item.id === id) {
					if (value === 'inc') {
						if (item.amount < item.max) return { ...item, amount: item.amount + 1 }
					}
					if (value === 'dec') {
						if (item.amount > 1) return { ...item, amount: item.amount - 1 }
					}
				}
				return item
			})
			.filter((item) => item.amount !== 0)
		return { ...state, cart: tempCart }
	}

	if (action.type === COUNT_CART_TOTALS) {
		const { total_items, total_amount } = state.cart.reduce(
			(total, cartItem) => {
				const { amount, price } = cartItem
				total.total_items += amount
				total.total_amount += price * amount
				return total
			},
			{
				total_items: 0,
				total_amount: 0,
			}
		)
		return { ...state, total_items, total_amount }
	}

	return state
}

export default cart_reducer
