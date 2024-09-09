export const formatPrice = (num) => {
	const number = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(num / 100)
	return number
}

export const getUniqueValues = (data, type) => {
	let unique = data.map((item) => item[type]).sort()
	if (type === 'colors') {
		unique = unique.flat()
	}
	return ['all', ...new Set(unique)]
}
