import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		let maxPrice = action.payload.map((p) => p.price)
		maxPrice = Math.max(...maxPrice)
		return {
			...state,
			all_products: [...action.payload],
			filtered_products: [...action.payload],
			filters: {
				...state.filters,
				maxPrice,
				price: maxPrice,
			},
		}
	}
	if (action.type === SET_GRIDVIEW) {
		return {
			...state,
			grid_view: true,
		}
	}
	if (action.type === SET_LISTVIEW) {
		return {
			...state,
			grid_view: false,
		}
	}
	if (action.type === UPDATE_SORT) {
		return {
			...state,
			sort: action.payload,
		}
	}
	if (action.type === SORT_PRODUCTS) {
		const { filtered_products, sort } = state
		let tempProducts = [...filtered_products]
		if (sort === 'lowest') {
			tempProducts = filtered_products.sort((a, b) => a.price - b.price)
		}
		if (sort === 'highest') {
			tempProducts = filtered_products.sort((a, b) => b.price - a.price)
		}
		if (sort === 'a-z') {
			tempProducts = filtered_products.sort((a, b) => {
				return a.name.localeCompare(b.name)
			})
		}
		if (sort === 'z-a') {
			tempProducts = filtered_products.sort((a, b) => {
				return b.name.localeCompare(a.name)
			})
		}

		return {
			...state,
			filtered_products: tempProducts,
		}
	}

	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload
		console.log(name, value)
		return {
			...state,
			filters: {
				...state.filters,
				[name]: value,
			},
		}
	}
	if (action.type === FILTER_PRODUCTS) {
		let { all_products } = state
		const { text, category, company, color, price } = state.filters
		let tempProducts = [...all_products]
		if (text) {
			tempProducts = tempProducts.filter((product) => {
				return product.name.toLowerCase().startsWith(text.toLowerCase())
			})
		}
		if (category !== 'all') {
			tempProducts = tempProducts.filter((product) => product.category === category)
		}
		if (company !== 'all') {
			tempProducts = tempProducts.filter((product) => product.company === company)
		}
		if (color !== 'all') {
			tempProducts = tempProducts.filter((product) => product.colors.includes(color))
		}
		if (price !== state.filters.maxPrice) {
			tempProducts = tempProducts.filter((product) => product.price <= price)
		}
		return {
			...state,
			filtered_products: tempProducts,
		}
	}
	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				text: '',
				category: 'all',
				company: 'all',
				color: 'all',
				maxPrice: state.filters.maxPrice,
				price: state.filters.maxPrice,
			},
		}
	}
	throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
