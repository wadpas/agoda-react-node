export const formatPrice = (num) => {
	const number = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(num / 100)
	return number
}

export const getUniqueValues = () => {}
