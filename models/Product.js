const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide product a name'],
			maxlength: [100, 'Name cannot be more than 100 characters'],
			trim: true,
		},
		price: {
			type: Number,
			required: [true, 'Please provide product price'],
			default: 0,
		},
		description: {
			type: String,
			required: [true, 'Please provide product description'],
			maxlength: [1000, 'Description cannot be more than 1000 characters'],
		},
		image: {
			type: String,
			default: '/uploads/example.png',
		},
		category: {
			type: String,
			required: [true, 'Please provide product category'],
			enum: ['room', 'tour', 'food', 'other'],
		},
		company: {
			type: String,
			required: [true, 'Please provide product company'],
			enum: {
				values: ['ikea', 'liddy', 'macros'],
				message: '{VALUE} is not supported',
			},
		},
		colors: {
			type: [String],
			default: ['#222'],
			required: true,
		},
		featured: {
			type: Boolean,
			default: false,
		},
		inventory: {
			type: Number,
			required: true,
			default: 15,
		},
		averageRating: {
			type: Number,
			default: 0,
		},
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
